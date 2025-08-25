import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../components/ui/collapsible";

const navData = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Servicios",
    path: "/services",
    subMenu: [
      {
        id: 21,
        name: "Instalación de cortinas",
        path: "/services/curtain-installation",
      },
      {
        id: 22,
        name: "Tapizados de lujo",
        path: "/services/luxury-upholstery",
      },
      {
        id: 23,
        name: "Revestimiento de paredes",
        path: "/services/wall-covering",
      },
      {
        id: 24,
        name: "Confección de cortinas",
        path: "/services/custom-curtain-making",
      },
      {
        id: 25,
        name: "Proyectos de renovación",
        path: "/services/renovation-projects",
      },
      {
        id: 26,
        name: "Proyectos con visualización 3D",
        path: "/services/3d-visualization-projects",
      },
    ],
  },
  {
    id: 3,
    name: "Marcas",
    path: "/brands",
  },
  {
    id: 4,
    name: "Trabajos",
    path: "/portfolio",
  },
  {
    id: 5,
    name: "Contacto",
    path: "/contact",
  },
  {
    id: 6,
    name: "Blog",
    path: "/blog",
  },
  {
    id: 7,
    name: "Tour virtual",
    path: "/virtual-tour",
  },
];

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openCollapsible, setOpenCollapsible] = useState<number>(0);

  const toggleCollapsible = (id: number) => {
    setOpenCollapsible(openCollapsible === id ? 0 : id);
  };

  return (
    <nav className="bg-background border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a
              href="/"
              className="text-2xl font-bold text-foreground hover:text-foreground/80 transition-colors"
            >
              MikaDesign
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navData.map((item) => (
              <div key={item.id}>
                {item.subMenu ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="h-auto p-2 font-medium"
                      >
                        {item.name}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-64">
                      {item.subMenu.map((subItem) => (
                        <DropdownMenuItem key={subItem.id} asChild>
                          <a
                            href={subItem.path}
                            className="w-full cursor-pointer"
                          >
                            {subItem.name}
                          </a>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Button
                    variant="ghost"
                    className="h-auto p-2 font-medium"
                    asChild
                  >
                    <a href={item.path}>{item.name}</a>
                  </Button>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-4 mt-8">
                  {navData.map((item) => (
                    <div key={item.id}>
                      {item.subMenu ? (
                        <Collapsible
                          open={openCollapsible === item.id}
                          onOpenChange={() => toggleCollapsible(item.id)}
                        >
                          <CollapsibleTrigger asChild>
                            <Button
                              variant="ghost"
                              className="w-full justify-between h-auto p-3 text-left font-medium"
                            >
                              {item.name}
                              <ChevronDown
                                className={`h-4 w-4 transition-transform ${
                                  openCollapsible === item.id
                                    ? "rotate-180"
                                    : ""
                                }`}
                              />
                            </Button>
                          </CollapsibleTrigger>
                          <CollapsibleContent className="space-y-2">
                            <div className="pl-4 space-y-2">
                              {item.subMenu.map((subItem) => (
                                <Button
                                  key={subItem.id}
                                  variant="ghost"
                                  className="w-full justify-start h-auto p-2 text-sm text-muted-foreground"
                                  asChild
                                >
                                  <a
                                    href={subItem.path}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                  >
                                    {subItem.name}
                                  </a>
                                </Button>
                              ))}
                            </div>
                          </CollapsibleContent>
                        </Collapsible>
                      ) : (
                        <Button
                          variant="ghost"
                          className="w-full justify-start h-auto p-3 text-left font-medium"
                          asChild
                        >
                          <a
                            href={item.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.name}
                          </a>
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
