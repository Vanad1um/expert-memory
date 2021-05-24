package com.filter;

import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class FilterExample implements Filter {

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {

    }

    @Override
    public void doFilter(ServletRequest req, ServletResponse resp, FilterChain filterChain) throws IOException, ServletException {

        long startTime = System.currentTimeMillis();
        filterChain.doFilter(req, resp);
        long endTime = System.currentTimeMillis();

        HttpServletRequest requestData = (HttpServletRequest) req;
        System.out.println(requestData.getMethod() + " - " + requestData.getRequestURL() + " - " + (endTime - startTime) + " ms");
    }

    @Override
    public void destroy() {

    }
}
