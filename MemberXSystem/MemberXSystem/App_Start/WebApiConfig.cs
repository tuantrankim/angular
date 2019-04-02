using Newtonsoft.Json.Serialization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Formatting;
using System.Web.Http;
using System.Net.Http.Headers;
using System.Web.Http.Cors;

namespace MemberXSystem
{
    public static class WebApiConfig
    {
        //How to re return JSON instead of XML when request is made from browser -- approach 2
        public class CustomJsonFormatter : JsonMediaTypeFormatter
        {
            public CustomJsonFormatter()
            {
                this.SupportedMediaTypes.Add(new MediaTypeHeaderValue("text/html"));
            }

            public override void SetDefaultContentHeaders(Type type, HttpContentHeaders headers, MediaTypeHeaderValue mediaType)
            {
                base.SetDefaultContentHeaders(type, headers, mediaType);
                headers.ContentType = new MediaTypeHeaderValue("application/json");
            }
        }
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services

            // Enable cors origin requests
            var cors = new EnableCorsAttribute("*", "*", "*");
            config.EnableCors(cors);

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
            //Indend JSON format
            //config.Formatters.JsonFormatter.SerializerSettings.Formatting = Newtonsoft.Json.Formatting.Indented;
            //config.Formatters.JsonFormatter.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();

            //Remove XML formatter
            config.Formatters.Remove(config.Formatters.XmlFormatter);

            //Remove Json formatter
            //config.Formatters.Remove(config.Formatters.JsonFormatter);

            //How to re return JSON instead of XML when request is made from browser -- approach 1
            //config.Formatters.JsonFormatter.SupportedMediaTypes.Add(new System.Net.Http.Headers.MediaTypeHeaderValue("text/html"));

            //How to re return JSON instead of XML when request is made from browser -- approach 2 : use customer json formatter
            config.Formatters.Add(new CustomJsonFormatter());
        }
    }
}
