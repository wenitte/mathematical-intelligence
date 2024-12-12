# 

Source: https://proofwiki.org/wiki/Exponential_Generating_Function_for_Boubaker_Polynomials

Theorem
The Boubaker polynomials, defined as:           

$\map {B_n} x = \begin {cases}
1 & : n = 0 \\
x & : n = 1 \\
x^2 + 2 & : n = 2 \\
x \map {B_{n - 1} } x - \map {B_{n - 2} } x & : n > 2 \end {cases}$

have as an exponential generating function:

$\ds \map {f_{B_n, \operatorname {EXP} } } {x, t} = \sum_{n \mathop = 0}^\infty \map {B_n} x \frac {t^n} {n!} = 4 x e^{t \frac x 2} \frac {\map \sin {t \sqrt {1 - \paren {\frac x 2}^2} } } {\sqrt {1 - \paren {\frac x 2}^2} } - 2 e^{t \frac x 2} \map \cos {t \sqrt {1 - \paren {\frac x 2}^2} } - 3$

This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Proof
From the definition of the Boubaker polynomials, we have:    

$\begin {cases} \map {B_0} x = 1 \\ \map {B_1} x = x \end {cases}$

We have also, for $T_n$, the Chebyshev polynomials of the first kind and $U_n$, the Chebyshev polynomials of the second kind:        

$\begin {cases} \map {T_0} x = 1 \\ \map {T_1} x = x \end {cases}$
and:

$\begin {cases} \map {U_{-1} } x = 0 \\ \map {U_0} x = 1 \\ \map {U_1} x = 2 x \end {cases}$

Then, from the definition of the exponential generating functions of the Chebyshev polynomials of the first kind:

$\ds \map {f_{T_n, \operatorname {EXP} } } {x, t} = e^{t \frac x 2} \map \cos {t \sqrt {1 - \paren {\frac x 2}^2} }$
and the Chebyshev polynomials of the second kind: 

$\ds \map {f_{U_n, \operatorname {EXP} } } {x, t} = e^{t \frac x 2} \frac {\map \sin {t \sqrt {1 - \paren {\frac x 2}^2} } } {\sqrt {1 - \paren {\frac x 2}^2} }$
and from the relation:

$\map {B_n} x = 4 x \map {U_{n - 1} } {\dfrac x 2} - 2 \map {T_n} {\dfrac x 2}$
which is valid only for $n > 1$, we have:

$\ds \map {B_0} x \dfrac {t^0} {0!} + \map {B_1} x \dfrac {t^1} {1!} + \sum_{n \mathop = 2}^\infty \map {B_n} x \dfrac {t^n} {n!} = 4 x \sum_{n \mathop = 2}^\infty \map {U_{n - 1} } x \dfrac {t^n} {n!} - 2 \sum_{n \mathop = 2}^\infty \map {T_n} x \dfrac {t^n} {n!} + \map {B_0} x \dfrac {t^0} {0!} + \map {B_1} x \dfrac {t^1} {1!} - 4 x \sum_{n \mathop = 0}^1 \map {U_{n - 1} } x \dfrac {t^n} {n!} - 2 \sum_{n \mathop = 0}^1 \map {T_n} x \dfrac {t^n} {n!}$

Finally, by simplifying the two sides and considering the exponential generating functions and the values of the first terms of $T_n$ and $U_n$, we obtain:      

$\ds \sum_{n \mathop = 0}^\infty \map {B_n} x \frac{t^n} {n!} = 4 x e^{t \frac x 2} \dfrac {\map \sin {t \sqrt {1 - \paren {\frac x 2}^2} } } {\sqrt {1 - \paren {\frac x 2}^2} } - 2 e^{t \frac x 2} \map \cos {t \sqrt {1 - \paren {\dfrac x 2}^2} } - 3$
Hence the result.     
$\blacksquare$


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.




