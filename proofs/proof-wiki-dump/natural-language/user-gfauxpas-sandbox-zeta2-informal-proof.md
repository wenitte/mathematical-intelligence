# 

Source: https://proofwiki.org/wiki/User:GFauxPas/Sandbox/Zeta2/Informal_Proof

Rigorous justifications of the algebraic manipulations following require more advanced mathematics. As presented, this is an informal proof. However, it has historical significance, as such reasoning was used by Euler himself.
We have that if $a$ is the root of a polynomial, $\left({1-\dfrac x a}\right)$ is a factor of that polynomial. 
Following that line of reasoning,

$\ds \sin x = Ax \prod \left({1 - \frac x { n\pi }}\right)$
where the product is taken over all $n \in \Z \setminus \left\{{0}\right\}$, and $A$ is some constant.
That is, 














\(\ds \sin x\)

\(=\)







\(\ds \ldots \left({1 - \frac x { 2\pi } }\right) \left({1 - \frac x { \pi } }\right) Ax \left({1 + \frac x { \pi } }\right) \left({1 + \frac x { 2\pi } }\right)\cdots\)




















\(\ds \)

\(=\)







\(\ds A x \left({1 - \frac {x^2} {\pi^2} }\right) \left({1 - \frac {x^2} {2^2 \pi^2} }\right) \left({1 - \frac {x^2} {3^2 \pi^2} }\right) \cdots\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\sin x}x\)

\(=\)







\(\ds A \left({1 - \frac {x^2} {\pi^2} }\right) \left({1 - \frac {x^2} {2^2 \pi^2} }\right) \left({1 - \frac {x^2} {3^2 \pi^2} }\right) \cdots\)





for $x \ne 0$.



That $\dfrac {\sin x}x \to 1$ as $x \to 0$ is a well known limit. Letting $x$ tend to $0$ in the above equation shows that $A = 1$.
That is, 
$\sin x = x \left({1 - \dfrac{x^2}{\pi^2}}\right) \left({1 - \dfrac{x^2}{4 \pi^2}}\right) \left({1 - \dfrac{x^2}{9 \pi^2}}\right) \cdots$
Recall the series expansion of $\sin x$:

$\sin x = x - \dfrac {x^3}{3!} + \dfrac {x^5}{5!} - \dfrac {x^7}{7!} + \cdots$
We equate the cube terms of the series and the product:














\(\ds - \frac {x^3}{3!}\)

\(=\)







\(\ds x\left({-\frac{x^2}{\pi^2} - \frac {x^2}{2^2\pi^2} - \frac {x^2}{3^2\pi^2}+\cdots }\right)\)









Equating coefficients:














\(\ds \frac 1 {3!}\)

\(=\)







\(\ds \frac 1 {\pi^2} \sum_{n = 1}^{\infty} \frac 1 {n^2}\)














\(\ds \leadsto \ \ \)





\(\ds \zeta \left({2}\right)\)

\(=\)







\(\ds \frac {\pi^2}6\)









$\blacksquare$





