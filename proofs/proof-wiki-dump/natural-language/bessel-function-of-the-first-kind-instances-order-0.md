# 

Source: https://proofwiki.org/wiki/Bessel_Function_of_the_First_Kind/Instances/Order_0

Specific Instance of Bessel Functions of the First Kind
Let $\map {J_n} x$ denote the Bessel function of the first kind of order $n$.















\(\ds \map {J_0} x\)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \dfrac {\paren {-1}^k} {\paren {k!}^2} \paren {\dfrac x 2}^{2 k}\)




















\(\ds \)

\(=\)







\(\ds 1 - \dfrac {x^2} {2^2} + \dfrac {x^4} {2^2 \times 4^2} - \dfrac {x^6} {2^2 \times 4^2 \times 6^2} + \dotsb\)











Proof
From Series Expansion of Bessel Function of the First Kind:














\(\ds \map {J_n} x\)

\(=\)







\(\ds \dfrac {x^n} {2^n \, \map \Gamma {n + 1} } \paren {1 - \dfrac {x^2} {2 \paren {2 n + 2} } + \dfrac {x^4} {2 \times 4 \paren {2 n + 2} \paren {2 n + 4} } - \cdots}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \dfrac {\paren {-1}^k} {k! \, \map \Gamma {n + k + 1} } \paren {\dfrac x 2}^{n + 2 k}\)









where $n$ is not a (strictly) negative integer.

$0$ fits that category, and so:














\(\ds \map {J_0} x\)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \dfrac {\paren {-1}^k} {k! \, \map \Gamma {0 + k + 1} } \paren {\dfrac x 2}^{0 + 2 k}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \dfrac {\paren {-1}^k} {k! \, \map \Gamma {k + 1} } \paren {\dfrac x 2}^{2 k}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \dfrac {\paren {-1}^k} {\paren {k!}^2} \paren {\dfrac x 2}^{2 k}\)





Gamma Function Extends Factorial




Or working directly upon the terms themselves:














\(\ds \map {J_0} x\)

\(=\)







\(\ds \dfrac {x^0} {2^0 \, \map \Gamma {0 + 1} } \paren {1 - \dfrac {x^2} {2 \paren {2 \times 0 + 2} } + \dfrac {x^4} {2 \times 4 \paren {2 \times 0 + 2} \paren {2 \times 0 + 4} } - \cdots}\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {1 \times \map \Gamma 1} \paren {1 - \dfrac {x^2} {2 \times 2} + \dfrac {x^4} {2 \times 4 \times 2 \times 4} - \cdots}\)




















\(\ds \)

\(=\)







\(\ds 1 - \dfrac {x^2} {2^2} + \dfrac {x^4} {2^2 \times 4^2} - \cdots\)









$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 24$: Bessel Functions: Bessel Function of the First Kind of Order $n$: $24.5$




