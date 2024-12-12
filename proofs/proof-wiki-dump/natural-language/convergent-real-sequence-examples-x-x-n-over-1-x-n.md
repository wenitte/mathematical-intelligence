# 

Source: https://proofwiki.org/wiki/Convergent_Real_Sequence/Examples/x_%2B_x%5En_over_1_%2B_x%5En

Example of Convergent Real Sequence
The sequence $\sequence {a_n}$ defined as:

$a_n = \dfrac {x + x^n} {1 + x^n}$
is convergent for $x \ne -1$.
Then:

$\ds \lim_{n \mathop \to \infty} \dfrac {x + x^n} {1 + x^n} = \begin {cases} 1 & : x \ge 1 \\ x & : -1 < x < 1 \\ 1 & : x < -1 \\ \text {undefined} & : x = -1 \end {cases}$


Proof
Let $\size x < 1$.
We have:














\(\ds \dfrac {x + x^n} {1 + x^n}\)

\(\to\)







\(\ds \dfrac {x + 0} {1 + 0}\)

\(\ds \text {as $n \to \infty$}\)



Sequence of Powers of Number less than One














\(\ds \)

\(=\)







\(\ds x\)










Now let $\size x > 1$.
We have:














\(\ds \dfrac {x + x^n} {1 + x^n}\)

\(=\)







\(\ds \dfrac {\dfrac 1 {x^{n - 1} } + 1} {\dfrac 1 {x^n} + 1}\)





dividing top and bottom by $x_n$














\(\ds \)

\(=\)







\(\ds \dfrac {0 + 1} {0 + 1}\)

\(\ds \text {as $n \to \infty$}\)



Sequence of Powers of Reciprocals is Null Sequence














\(\ds \)

\(=\)







\(\ds 1\)










Then when $x = 1$:














\(\ds \dfrac {x + x^n} {1 + x^n}\)

\(=\)







\(\ds \dfrac {1 + 1^n} {1 + 1^n}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {1 + 1} {1 + 1}\)




















\(\ds \)

\(=\)







\(\ds 1\)










When $x = -1$:














\(\ds \dfrac {x + x^n} {1 + x^n}\)

\(=\)







\(\ds \dfrac {\paren {-1} + \paren {-1}^n} {1 + \paren {-1}^n}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {-1 + 1} {1 + 1}\)





for even $n$














\(\ds \)

\(\)







\(\ds \dfrac {-1 + -1} {1 + -1}\)





for odd $n$














\(\ds \)

\(=\)







\(\ds 0\)





for even $n$














\(\ds \)

\(\)







\(\ds \text {undefined}\)





for odd $n$



Hence the result.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 4$: Convergent Sequences: Exercise $\S 4.20 \ (2)$




