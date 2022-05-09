using Microsoft.AspNetCore.Mvc;

namespace BibR.Controllers
{
    public class LoginController : Controller
    {
        public IActionResult Logar()
        {
            return View();
        }
    }
}
