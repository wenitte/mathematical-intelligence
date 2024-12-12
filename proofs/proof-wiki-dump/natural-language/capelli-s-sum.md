# 

Source: https://proofwiki.org/wiki/Capelli%27s_Sum



Theorem
$\ds \paren {x + y}^{\overline n} = \sum_k \binom n k x^{\overline k} y^{\overline {n - k} }$
where:

$\dbinom n k$ denotes a binomial coefficient
$x^{\overline k}$ denotes $x$ to the $k$ rising.


Proof
The proof proceeds by induction on $n$.

For all $n \in \Z_{> 0}$, let $\map P n$ be the proposition:

$\ds \paren {x + y}^{\overline n} = \sum_k \binom n k x^{\overline k} y^{\overline {n - k} }$


Basis for the Induction
$\map P 1$ is the case:














\(\ds \paren {x + y}^{\overline 1}\)

\(=\)







\(\ds x^{\overline 1} + y^{\overline 1}\)





Number to Power of One Rising is Itself














\(\ds \)

\(=\)







\(\ds x^{\overline 0} y^{\overline 1} + x^{\overline 1} y^{\overline 0}\)





Number to Power of Zero Rising is One














\(\ds \)

\(=\)







\(\ds \binom 1 0 x^{\overline 0} y^{\overline 1} + \binom 1 1 x^{\overline 1} y^{\overline 0}\)





One Choose n














\(\ds \)

\(=\)







\(\ds \sum_k \binom 1 k x^{\overline k} y^{\overline {1 - k} }\)









Thus $\map P 1$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that, if $\map P m$ is true, where $m \ge 1$, then it logically follows that $\map P {m + 1}$ is true.

So this is the induction hypothesis:

$\ds \paren {x + y}^{\overline m} = \sum_k \binom m k x^{\overline k} y^{\overline {m - k} }$

from which it is to be shown that:

$\ds \paren {x + y}^{\overline {m + 1} } = \sum_k \binom {m + 1} k x^{\overline k} y^{\overline {m + 1 - k} }$


Induction Step
This is the induction step:














\(\ds \paren {x + y}^{\overline {m + 1} }\)

\(=\)







\(\ds \paren {x + y}^{\overline m} \paren {x + y + m}\)





Definition of Rising Factorial














\(\ds \)

\(=\)







\(\ds \paren {\sum_k \binom m k x^{\overline k} y^{\overline {m - k} } } \paren {x + y + m}\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \paren {\sum_k \binom m k x^{\overline k} y^{\overline {m - k} } } \paren {x + k + y + m - k}\)




















\(\ds \)

\(=\)







\(\ds \sum_k \binom m k x^{\overline k} \paren {x + k} y^{\overline {m - k} } + \sum_k \binom m k x^{\overline k} y^{\overline {m - k} } \paren {y + m - k}\)




















\(\ds \)

\(=\)







\(\ds \sum_k \binom m k x^{\overline {k + 1} } y^{\overline {m - k} } + \sum_k \binom m k x^{\overline k} y^{\overline {m - k + 1} }\)





Definition of Rising Factorial














\(\ds \)

\(=\)







\(\ds \sum_k \binom m k x^{\overline {k + 1} } y^{\overline {m - k} } + \sum_k \binom m {k + 1} x^{\overline {k + 1} } y^{\overline {m - k} }\)





Translation of Index Variable of Summation














\(\ds \)

\(=\)







\(\ds \sum_k \binom {m + 1} k x^{\overline {k + 1} } y^{\overline {m - k} }\)





Pascal's Rule



So $\map P m \implies \map P {m + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\ds \forall n \in \Z_{> 0}: \paren {x + y}^{\overline n} = \sum_k \binom n k x^{\overline k} y^{\overline {n - k} }$

$\blacksquare$


Source of Name
This entry was named for Alfredo Capelli.


Sources
1893: Alfredo Capelli: L'analisi algebrica e l'interpretazione fattoriale delle potenze (Giornale di Matematiche di Battaglini Vol. 31: pp. 291 – 313)
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.6$: Binomial Coefficients: Exercise $33$




