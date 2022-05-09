using Microsoft.AspNetCore.Mvc;

namespace BibR.Controllers
{
    public class CadastroController : Controller
    {
        public IActionResult Cadastrar()
        {
            return View();
        }
    }
}
