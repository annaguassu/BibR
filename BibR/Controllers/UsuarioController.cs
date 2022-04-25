using Microsoft.AspNetCore.Mvc;

namespace BibR.Controllers
{
    public class UsuarioController : Controller
    {
        public IActionResult Cadastro()
        {
            return View();
        }

        public IActionResult Login()
        {
            return View();
        }
    }
}
