# 

Source: https://proofwiki.org/wiki/Difference_of_Two_Odd_Powers/Mistake



Source Work
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables

Chapter $2$: Special Products and Factors
This mistake can be seen in the edition as published by Schaum: ISBN 0-07-060224-7 (unknown printing).


Mistake
$x^{2 n} - y^{2 n} = \paren {x - y} \paren {x + y} \paren {x^{n - 1} + x^{n - 2} y + x^{n - 3} y^2 + \dotsb} \paren {x^{n - 1} - x^{n - 2} y + x^{n - 3} y^2 - \dotsb}$


Correction
This result is true only if $n$ is an odd integer.

When $n$ is even, we get:














\(\ds x^{2 n} - y^{2 n}\)

\(=\)







\(\ds \paren {x^2}^n - \paren {y^2}^n\)




















\(\ds \)

\(=\)







\(\ds \paren {x^2 - y^2} \sum_{j \mathop = 0}^{n - 1} \paren {x^2}^{n - j - 1} \paren {y^2}^j\)




















\(\ds \)

\(=\)







\(\ds \paren {x - y} \paren {x + y} \paren {\paren {x^2}^{n - 1} + \paren {x^2}^{n - 2} \paren {y^2} + \paren {x^2}^{n - 3} \paren {y^2}^2 + \dotsb + \paren {x^2} \paren {y^2}^{n - 2} + \paren {y^2}^{n - 1} }\)




















\(\ds \)

\(=\)







\(\ds \paren {x - y} \paren {x + y} \paren {x^{2 n - 2} + x^{2 n - 4} y^2 + x^{2 n - 6} y^4 + \dotsb + x^2 y^{2 n - 4} + y^{2 n - 2} }\)









and there is no obvious way to factorise $\ds \sum_{j \mathop = 0}^{n - 1} x^{2 \paren {n - j - 1} } y^{2 j}$

As an example, we examine $x^8 - y^8$:














\(\ds x^8 - y^8\)

\(=\)







\(\ds \paren {x^2}^4 - \paren {y^2}^4\)




















\(\ds \)

\(=\)







\(\ds \paren {x^2 - y^2} \sum_{j \mathop = 0}^3 \paren {x^2}^{3 - j} \paren {y^2}^j\)




















\(\ds \)

\(=\)







\(\ds \paren {x - y} \paren {x + y} \paren {\paren {x^2}^3 + \paren {x^2}^2 \paren {y^2} + \paren {x^2} \paren {y^2}^2 + \paren {y^2}^3}\)




















\(\ds \)

\(=\)







\(\ds \paren {x - y} \paren {x + y} \paren {x^6 + x^4 y^2 + x^2 y^4 + y^6}\)










Using the stated formula, we obtain:














\(\ds x^8 - y^8\)

\(=\)







\(\ds \paren {x - y} \paren {x + y} \paren {x^3 + x^2 y + x y^2 + y^3} \paren {x^3 - x^2 y + x y^2 - y^3}\)




















\(\ds \)

\(=\)







\(\ds \paren {x - y} \paren {x + y} \paren {x^6 + x^4 y^2 - x^2 y^4 - y^6}\)





multiplying out



which is not the same thing at all.

That they are indeed not the same can be calculated directly.
Let $x = 2, y = 1$.
We have that $2^8 - 1 = 255$.

Then we investigate what the formulae give us:














\(\ds 2^8 - 1\)

\(=\)







\(\ds \paren {2^2}^4 - \paren {1^2}^4\)




















\(\ds \)

\(=\)







\(\ds \paren {2 - 1} \paren {2 + 1} \paren {2^6 + 2^4 + 2^2 + 1}\)




















\(\ds \)

\(=\)







\(\ds 3 \times 85\)




















\(\ds \)

\(=\)







\(\ds 255\)










Using the wrong formula:














\(\ds 2^8 - 1\)

\(=\)







\(\ds \paren {2^2}^4 - \paren {1^2}^4\)




















\(\ds \)

\(=\)







\(\ds \paren {2 - 1} \paren {2 + 1} \paren {2^3 + 2^2 + 2 + 1} \paren {2^3 - 2^2 + 2 - 1}\)




















\(\ds \)

\(=\)







\(\ds 3 \times 15 \times 5\)




















\(\ds \)

\(=\)







\(\ds 225\)









$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 2$: Special Products and Factors: $2.22$




