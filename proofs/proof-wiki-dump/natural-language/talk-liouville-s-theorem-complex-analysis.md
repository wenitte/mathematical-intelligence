# 

Source: https://proofwiki.org/wiki/Talk:Liouville%27s_Theorem_(Complex_Analysis)

I believe that I have found a simpler proof because it only refers to the most basic Cauchy Integral Formula and doesn't require taking derivates, etc. 
By assumption, there is an $M \ge 0$ such that $\size {\map f z} \le  M$ for all $z \in \C$. Now let $a \in \C$, then by the Cauchy Integral Formula:

$\ds \size {\map f a - \map f 0} = \size {\frac 1 {2 \pi i} {\int_C \frac {\map f w} {w - a} \rd w}  - \frac 1 {2 \pi i} {\int_C \frac {\map f w} w \rd w} } = \size {\frac 1 {2 \pi i} {\int_C \frac {a \map f w} {\paren {w - a} w} \rd w} } \le \frac {a M} {2 \pi} \int_C \frac 1 {\size {\paren {w - a} w} } \rd w \le \frac {a M} {2 \pi} \frac {2 \pi R} {R^2/2} = \frac {2 a M} R$
where $\map C w$ denotes a circle of radius $R$ and centre $0$ and $R \ge 2 \size a$. Since $2 a M/R \to 0$ as $R \to \infty$, it follows that $f(a) = f(0)$ and the function is constant. 
$\blacksquare$ Courtesy of Ilan Vardi.

Could you explain a little more on the last inequality? The estimate used isn't immediately apparent (but it seems fine). Oh, and please use the wiggly signature button to sign your posts (third from the right on the top edit bar). --Lord_Farin 02:47, 21 April 2012 (EDT)
If this is indeed a valid proof, then it merits adding to the page. But I share LF's concerns: the steps need to be justified by links to a page where the fact is established rigorously. --prime mover 04:08, 21 April 2012 (EDT)
It appears valid (I have a slightly different estimate), but I'm curious if there is a simple proof of the last estimate. --Lord_Farin 04:17, 21 April 2012 (EDT)




