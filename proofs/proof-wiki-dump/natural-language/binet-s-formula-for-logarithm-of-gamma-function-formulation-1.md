# 

Source: https://proofwiki.org/wiki/Binet%27s_Formula_for_Logarithm_of_Gamma_Function/Formulation_1



Theorem
Let $z$ be a complex number with a positive real part.
Then: 

$\ds \Ln \map \Gamma z = \paren {z - \frac 1 2} \Ln z - z + \frac 1 2 \ln 2 \pi + \int_0^\infty \paren {\frac 1 2 - \frac 1 t + \frac 1 {e^t - 1} } \frac {e^{-t z} } t \rd t$
where: 

$\Gamma$ is the Gamma function
$\Ln$ is the principal branch of the complex logarithm.


Corollary
Let $z$ be a complex number with a positive real part.
Then: 

$\ds \lim_{z \mathop \to \infty} \size {\Ln \map \Gamma z - \paren {z - \frac 1 2} \Ln z + z - \frac 1 2 \ln 2 \pi } \to 0$
where: 

$\Gamma$ is the Gamma function
$\Ln$ is the principal branch of the complex logarithm.


Proof
We have:














\(\ds \map {\dfrac \d {\d z} } {\Ln \map \Gamma {z + 1} }\)

\(=\)







\(\ds \int_0^\infty \paren {\frac {e^{-t} } t - \frac {e^{-t \paren {z + 1} } } {1 - e^{-t} } } \rd t\)





Gauss's Integral Form of Digamma Function and Definition of Digamma Function














\(\ds \)

\(=\)







\(\ds \int_0^\infty \frac {e^{-t} } t  \rd t - \int_0^\infty \frac {e^{-z t} e^{-t} } {1 - e^{-t} } \rd t\)





Linear Combination of Integrals














\(\ds \)

\(=\)







\(\ds \int_0^\infty \frac {e^{-t} } t  \rd t - \int_0^\infty \frac {e^{-z t} e^{-t} } {1 - e^{-t} } \times \dfrac {e^t} {e^t} \rd t\)





multiplying top and bottom by $e^t$














\(\ds \)

\(=\)







\(\ds \int_0^\infty \frac {e^{-t} } t  \rd t - \int_0^\infty \frac {e^{-t z} } {e^t - 1} \rd t\)





Product of Powers














\(\ds \)

\(=\)







\(\ds \int_0^\infty \frac {e^{-t} } t  \rd t - \int_0^\infty \frac {e^{-t z} } {e^t - 1} \rd t + \paren {\frac 1 2 \int_0^\infty e^{-t z} \rd t - \frac 1 2 \int_0^\infty e^{-t z} \rd t} + \paren {\int_0^\infty \frac {e^{-t z} } t  \rd t - \int_0^\infty \frac {e^{-t z} } t \rd t}\)





adding $0$














\(\ds \)

\(=\)







\(\ds \frac 1 2 \int_0^\infty e^{-t z} \rd t + \int_0^\infty \frac {e^{-t} - e^{-t z} } t  \rd t - \int_0^\infty \paren {\frac 1 2 - \frac 1 t + \frac 1 {e^t - 1} } e^{-t z} \rd t\)





rearranging and Linear Combination of Integrals














\(\ds \)

\(=\)







\(\ds \frac 1 2 \intlimits {-\frac 1 z e^{-t z} } 0 \infty + \int_0^\infty \frac {e^{-t} - e^{-t z} } t  \rd t - \int_0^\infty \paren {\frac 1 2 - \frac 1 t + \frac 1 {e^t - 1} } e^{-t z} \rd t\)





Primitive of Exponential of a x














\(\ds \)

\(=\)







\(\ds \frac 1 {2 z} + \map \ln z - \int_0^\infty \paren {\frac 1 2 - \frac 1 t + \frac 1 {e^t - 1} } e^{-t z} \rd t\)





Logarithm as definite integral of difference of exponentials: $\ds \int_0^\infty \frac {e^{-a x} - e^{-b x} } x \rd x = \ln \frac b a$








\(\ds \leadsto \ \ \)





\(\ds \int_1^z \map {\dfrac \d {\d z} } {\Ln \map \Gamma {z + 1} } \d z\)

\(=\)







\(\ds \int_1^z \paren {\frac 1 {2 z} + \map \ln z - \int_0^\infty \paren {\frac 1 2 - \frac 1 t + \frac 1 {e^t - 1} } e^{-t z} \rd t} \d z\)





integrating over $z$ from $1$ to $z$








\(\ds \leadsto \ \ \)





\(\ds \Ln \map \Gamma {z + 1}\)

\(=\)







\(\ds \frac 1 2 \bigintlimits {\map \ln z} 1 z + \bigintlimits {\map z \ln z - z} 1 z - \int_0^\infty \paren {\frac 1 2 - \frac 1 t + \frac 1 {e^t - 1} } \intlimits {-\frac 1 t e^{-t z} } 1 z \rd t\)





Primitive of Reciprocal, Primitive of Logarithm of x, Primitive of Exponential of a x














\(\ds \)

\(=\)







\(\ds \frac 1 2 \map \ln z + z \ln z - z + 1 + \int_0^\infty \paren {\frac 1 2 - \frac 1 t + \frac 1 {e^t - 1} } \frac {e^{-t z} - e^{-t} } t \rd t\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 \map \ln z + z \ln z - z + 1 + \int_0^\infty \paren {\frac 1 2 - \frac 1 t + \frac 1 {e^t - 1} } \frac {e^{-t z} } t \rd t - \int_0^\infty \paren {\frac 1 2 - \frac 1 t + \frac 1 {e^t - 1} } \frac {e^{-t} } t \rd t\)





Linear Combination of Integrals








\(\ds \leadsto \ \ \)





\(\ds \map \Ln {z \map \Gamma z}\)

\(=\)







\(\ds \frac 1 2 \map \ln z + z \ln z - z + 1 + \int_0^\infty \paren {\frac 1 2 - \frac 1 t + \frac 1 {e^t - 1} } \frac {e^{-t z} } t \rd t - \int_0^\infty \paren {\frac 1 2 - \frac 1 t + \frac 1 {e^t - 1} } \frac {e^{-t} } t \rd t\)





Gamma Difference Equation








\(\ds \leadsto \ \ \)





\(\ds \map \Ln {\map \Gamma z} + \map \ln z\)

\(=\)







\(\ds \frac 1 2 \map \ln z + z \ln z - z + 1 + \int_0^\infty \paren {\frac 1 2 - \frac 1 t + \frac 1 {e^t - 1} } \frac {e^{-t z} } t \rd t - \int_0^\infty \paren {\frac 1 2 - \frac 1 t + \frac 1 {e^t - 1} } \frac {e^{-t } } t \rd t\)





Sum of Logarithms








\(\ds \leadsto \ \ \)





\(\ds \map \Ln {\map \Gamma z}\)

\(=\)







\(\ds \paren {z - \frac 1 2} \ln z - z + 1 + \int_0^\infty \paren {\frac 1 2 - \frac 1 t + \frac 1 {e^t - 1} } \frac {e^{-t z} } t \rd t - \int_0^\infty \paren {\frac 1 2 - \frac 1 t + \frac 1 {e^t - 1} } \frac {e^{-t } } t \rd t\)





rearranging



Setting $z:= \dfrac 1 2$, we obtain:














\(\ds \map \Ln {\map \Gamma {\frac 1 2} }\)

\(=\)







\(\ds \paren {\frac 1 2 - \frac 1 2} \map \ln {\frac 1 2} - \frac 1 2 + 1 + \int_0^\infty \paren {\frac 1 2 - \frac 1 t + \frac 1 {e^t - 1} } \frac {e^{-t/2} } t \rd t - \int_0^\infty \paren {\frac 1 2 - \frac 1 t + \frac 1 {e^t - 1} } \frac {e^{-t } } t \rd t\)














\(\ds \leadsto \ \ \)





\(\ds \map \Ln {\pi^{\frac 1 2} }\)

\(=\)







\(\ds \frac 1 2 + \int_0^\infty \paren {\frac 1 2 - \frac 1 t + \frac 1 {e^t - 1} } \frac {e^{-t/2} } t \rd t - \int_0^\infty \paren {\frac 1 2 - \frac 1 t + \frac 1 {e^t - 1} } \frac {e^{-t } } t \rd t\)





Gamma Function of One Half








\(\ds \leadsto \ \ \)





\(\ds \frac 1 2 \map \Ln {\pi }\)

\(=\)







\(\ds \frac 1 2 + \int_0^\infty \paren {\frac 1 2 - \frac 1 t + \frac 1 {e^t - 1} } \frac {e^{-t/2} } t \rd t - \int_0^\infty \paren {\frac 1 2 - \frac 1 t + \frac 1 {e^t - 1} } \frac {e^{-t } } t \rd t\)





Logarithm of Power



Let:

$\ds J = \int_0^\infty \paren {\frac 1 2 - \frac 1 t + \frac 1 {e^t - 1} } \frac {e^{-t/2} } t \rd t$
$\ds I = \int_0^\infty \paren {\frac 1 2 - \frac 1 t + \frac 1 {e^t - 1} } \frac {e^{-t} } t \rd t$
Then our last equation becomes:

$\ds \frac 1 2 \map \Ln {\pi } = \dfrac 1 2 + J - I$

Setting $t:= \dfrac 1 2 u$ and $\rd t = \dfrac 1 2 \rd u$ we can rewrite $I$ as:














\(\ds I\)

\(=\)







\(\ds \int_0^\infty \paren {\frac 1 2 - \frac 1 {\frac 1 2 u} + \frac 1 {e^{u/2} - 1} } \frac {e^{-u/2 } } {\frac 1 2 u} \paren {\frac 1 2 \rd u}\)




















\(\ds \)

\(=\)







\(\ds \int_0^\infty \paren {\frac 1 2 - \frac 2 u + \frac 1 {e^{u/2} - 1} } \frac {e^{-u/2} } u \rd u\)





simplifying














\(\ds \)

\(=\)







\(\ds \int_0^\infty \paren {\frac 1 2 - \frac 2 t + \frac 1 {e^{t/2} - 1} } \frac {e^{-t/2} } t \rd t\)





rewriting with $t$



Therefore, taking the difference of $J$ and $I$, we obtain:














\(\ds J - I\)

\(=\)







\(\ds \paren {\int_0^\infty \paren {\frac 1 2 - \frac 1 t + \frac 1 {e^t - 1} } \frac {e^{-t/2 } } t \rd t} - \paren {\int_0^\infty \paren {\frac 1 2 - \frac 2 t + \frac 1 {e^{t/2} - 1} } \frac {e^{-t/2 } } t \rd t}\)




















\(\ds \)

\(=\)







\(\ds \int_0^\infty \paren {\paren {\frac 1 2 - \frac 1 2} + \paren { -\frac 1 t + \frac 2 t} + \paren {\frac 1 {e^t - 1} - \frac 1 {e^{t/2} - 1} } } \frac {e^{-t/2 } } t \rd t\)





Linear Combination of Integrals














\(\ds \)

\(=\)







\(\ds \int_0^\infty \paren {\frac 1 t + \paren {\frac {\paren {e^{t/2} - 1} - \paren {e^t - 1} } {\paren {e^t - 1} \paren {e^{t/2} - 1} } } } \frac {e^{-t/2 } } t \rd t\)




















\(\ds \)

\(=\)







\(\ds \int_0^\infty \paren {\frac 1 t - \paren {\frac {e^{t/2} \paren {e^{t/2} - 1} } {\paren {e^t - 1} \paren {e^{t/2} - 1} } } } \frac {e^{-t/2 } } t \rd t\)




















\(\ds \)

\(=\)







\(\ds \int_0^\infty \paren {\frac 1 t - \frac {e^{t/2} } {\paren {e^t - 1} } } \frac {e^{-t/2 } } t \rd t\)




















\(\ds \)

\(=\)







\(\ds \int_0^\infty \paren {\frac {e^{-t/2} } t - \frac 1 {\paren {e^t - 1} } } \frac 1 t \rd t\)









Solving for $J$, we obtain:














\(\ds J\)

\(=\)







\(\ds \paren {J - I} + I\)




















\(\ds \)

\(=\)







\(\ds \paren {\int_0^\infty \paren {\frac {e^{-t/2} } t - \frac 1 {\paren {e^t - 1} } } \frac 1 t \rd t } + \paren {\int_0^\infty \paren {\frac {e^{-t} } 2 - \frac {e^{-t} } t + \frac {e^{-t} } {e^t - 1} } \frac 1 t \rd t}\)




















\(\ds \)

\(=\)







\(\ds \int_0^\infty \paren {\frac {e^{-t/2} - e^{-t} } t + \paren {\frac {e^{-t} } 2 - \frac 1 {\paren {e^t - 1} } + \frac {e^{-t} } {e^t - 1} } } \frac 1 t \rd t\)





Linear Combination of Integrals














\(\ds \)

\(=\)







\(\ds \int_0^\infty \paren {\frac {e^{-t/2} - e^{-t} } t + \paren {\frac {e^{-t} \paren {e^t - 1} - 2 + 2 e^{-t} } {2 \paren {e^t - 1} } } } \frac 1 t \rd t\)




















\(\ds \)

\(=\)







\(\ds \int_0^\infty \paren {\frac {e^{-t/2} - e^{-t} } t + \paren {\frac {1 - e^{-t} - 2 + 2 e^{-t} } {2 \paren {e^t - 1} } } } \frac 1 t \rd t\)




















\(\ds \)

\(=\)







\(\ds \int_0^\infty \paren {\frac {e^{-t/2} - e^{-t} } t + \paren {\frac {e^{-t} - 1} {2 \paren {e^t - 1} } } } \frac 1 t \rd t\)




















\(\ds \)

\(=\)







\(\ds \int_0^\infty \paren {\frac {e^{-t/2} - e^{-t} } t + \paren {\frac {e^{-t} - 1} {2 \paren {e^t - 1} } \times \frac {e^t} {e^t} } } \frac 1 t \rd t\)





multiplying top and bottom by $e^t$














\(\ds \)

\(=\)







\(\ds \int_0^\infty \paren {\frac {e^{-t/2} - e^{-t} } t + \paren {\frac {1 - e^t} {2 e^t \paren {e^t - 1} } } } \frac 1 t \rd t\)





Product of Powers














\(\ds \)

\(=\)







\(\ds \int_0^\infty \paren {\frac {e^{-t/2} - e^{-t} } t - \frac 1 {2 e^t} } \frac 1 t \rd t\)




















\(\ds \)

\(=\)







\(\ds \int_0^\infty \paren {\frac {e^{-t/2} - e^{-t} } {t^2} - \frac {e^{-t} } {2 t} } \rd t\)




















\(\ds \)

\(=\)







\(\ds \int_0^\infty \paren {\frac {- \paren {e^{-t} - e^{t/2} } } {t^2} + \paren {\paren { \frac {e^{-t/2 } - 2 e^{-t} } {2 t} } - \paren { \frac {e^{-t/2 } - 2 e^{-t} } {2 t} } } - \frac {e^{-t} } {2 t} } \rd t\)





adding $0$














\(\ds \)

\(=\)







\(\ds \int_0^\infty \paren {\frac {t \paren {-e^{-t} + \frac 1 2 e^{-t/2} } - \paren {e^{-t} - e^{t/2} } } {t^2} - \paren { \frac {e^{-t/2 } - 2 e^{-t} } {2 t} } - \frac {e^{-t} } {2 t} } \rd t\)





rearranging














\(\ds \)

\(=\)







\(\ds \int_0^\infty \paren {\map {\dfrac \d {\d t} } {\frac {e^{-t} - e^{-t/2 } } t }  - \paren { \frac {e^{-t/2 } - 2 e^{-t} } {2 t} } - \frac {e^{-t} } {2 t} } \rd t\)





Quotient Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \int_0^\infty \paren {\map {\dfrac \d {\d t} } {\frac {e^{-t} - e^{-t/2 } } t }  + \paren { \frac { e^{-t} - e^{-t/2 } } {2 t} } } \rd t\)




















\(\ds \)

\(=\)







\(\ds \intlimits {\frac {e^{-t} - e^{-t/2 } } t } 0 \infty + \frac 1 2 \int_0^\infty \paren { \frac { e^{-t} - e^{-t/2 } } t }  \rd t\)





Linear Combination of Integrals














\(\ds \)

\(=\)







\(\ds 0 - \paren {\frac {-e^{-0} + \frac 1 2 e^{-0/2 } } 1 }  + \frac 1 2 \int_0^\infty \paren { \frac { e^{-t} - e^{-t/2 } } t }  \rd t\)





L'Hôpital's Rule, Derivative of Power, Derivative of Exponential Function














\(\ds \)

\(=\)







\(\ds 0 - \paren {-\frac 1 2}  + \frac 1 2 \int_0^\infty \paren { \frac { e^{-t} - e^{-t/2 } } t }  \rd t\)





Exponential of Zero














\(\ds \)

\(=\)







\(\ds \frac 1 2 + \frac 1 2 \map \ln {\frac 1 2 }\)





Logarithm as definite integral of difference of exponentials: $\ds \int_0^\infty \frac {e^{-a x} - e^{-b x} } x \rd x = \ln \frac b a$



Therefore:














\(\ds \frac 1 2 \map \Ln {\pi }\)

\(=\)







\(\ds \dfrac 1 2 + \paren {\frac 1 2 + \frac 1 2 \map \ln {\frac 1 2 } } - I\)














\(\ds \leadsto \ \ \)





\(\ds I\)

\(=\)







\(\ds 1 - \frac 1 2 \map \ln \pi + \frac 1 2 \paren {\map \ln 1 - \map \ln 2}\)





rearranging, Difference of Logarithms








\(\ds \leadsto \ \ \)





\(\ds I\)

\(=\)







\(\ds 1 - \frac 1 2 \map \ln {2 \pi}\)





Sum of Logarithms and Logarithm of 1 is 0



Therefore:














\(\ds \map \Ln {\map \Gamma z}\)

\(=\)







\(\ds \paren {z - \frac 1 2} \ln z - z + 1 + \int_0^\infty \paren {\frac 1 2 - \frac 1 t + \frac 1 {e^t - 1} } \frac {e^{-t z} } t \rd t - \int_0^\infty \paren {\frac 1 2 - \frac 1 t + \frac 1 {e^t - 1} } \frac {e^{-t} } t \rd t\)




















\(\ds \)

\(=\)







\(\ds \paren {z - \frac 1 2} \ln z - z + 1 + \int_0^\infty \paren {\frac 1 2 - \frac 1 t + \frac 1 {e^t - 1} } \frac {e^{-t z} } t \rd t - \paren {1 - \frac 1 2 \map \ln {2 \pi} }\)





substituting $I = 1 - \dfrac 1 2 \map \ln {2 \pi}$














\(\ds \)

\(=\)







\(\ds \paren {z - \frac 1 2} \Ln z - z + \frac 1 2 \ln 2 \pi + \int_0^\infty \paren {\frac 1 2 - \frac 1 t + \frac 1 {e^t - 1} } \frac {e^{-t z} } t \rd t\)









$\blacksquare$


Source of Name
This entry was named for Jacques Philippe Marie Binet.


Sources
1920: E.T. Whittaker and G.N. Watson: A Course of Modern Analysis (3rd ed.): $12.31$: Binet's first expression for $\log \Gamma \paren z$ in terms of an infinite integral




