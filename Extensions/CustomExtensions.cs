using System.Threading.Tasks;

using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace BlazorSamples.Extensions {
    public static class CustomExtensionMethods {
        public static ValueTask<object> TestIt(this IJSRuntime js) => js.InvokeAsync<object>(
            "testit"
        );
    }
}
