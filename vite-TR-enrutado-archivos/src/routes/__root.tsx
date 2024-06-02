import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
    {/* PODRIAMOS ESPECIFICAR UN LAYOUT O ALGO PARA NAVEGAR DE FORMA INTERNA EN LA APP EJEMPLO FUNCIONAL EN LA DOC OFICIAL 
    https://tanstack.com/router/latest/docs/framework/react/quick-start#srcroutes__roottsx */}
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})