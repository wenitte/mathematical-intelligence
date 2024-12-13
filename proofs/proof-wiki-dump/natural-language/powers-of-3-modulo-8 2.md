# 

Source: https://proofwiki.org/wiki/Powers_of_3_Modulo_8



Theorem
Let $n \in \Z_{\ge 0}$ be a strictly positive integer.
Then:

$3^n \equiv \begin {cases} 1 \pmod 8 & : \text {$n$ even} \\ 3 \pmod 8 & : \text {$n$ odd} \end {cases}$


Proof 1
Let the statement be rewritten as:
For all $r \in \Z_{\ge 0}$: 

$3^r \equiv \begin {cases} 1 \pmod 8 & : r = 2 n \\ 3 \pmod 8 & : r = 2 n + 1 \end {cases}$
where $n \in \Z_{\ge 0}$.

The proof proceeds by induction.
For all $n \in \Z_{\ge 0}$, let $\map P n$ be the proposition:

$3^{2 n} \equiv 1 \pmod 8$

$\map P 0$ is the case:

$3^{2 \times 0} = 3^0 = 1 \equiv 1 \pmod 8$
Thus $\map P 0$ is seen to hold.


Basis for the Induction
$\map P 1$ is the case:














\(\ds 3^{2 \times 1}\)

\(=\)







\(\ds 3^2\)




















\(\ds 3^{2 \times 1}\)

\(=\)







\(\ds 9\)




















\(\ds \)

\(\equiv\)







\(\ds 1 \pmod 8\)









Thus $\map P 1$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is the induction hypothesis:

$3^{2 k} \equiv 1 \pmod 8$

from which it is to be shown that:

$3^{2 \paren {k + 1} } \equiv 1 \pmod 8$


Induction Step
This is the induction step:
We have:














\(\ds 3^2\)

\(\equiv\)







\(\ds 1\)

\(\ds \pmod 8\)



Basis for the Induction














\(\ds 3^{2 k}\)

\(\equiv\)







\(\ds 1\)

\(\ds \pmod 8\)



Induction Hypothesis








\(\ds \leadsto \ \ \)





\(\ds 3^2 \times 3^{2 k}\)

\(\equiv\)







\(\ds 1 \times 1\)

\(\ds \pmod 8\)



Congruence of Product








\(\ds \leadsto \ \ \)





\(\ds 3^{2 \paren {k + 1} }\)

\(\equiv\)







\(\ds 1\)

\(\ds \pmod 8\)







So $\map P k \implies \map P {k + 1}$ and then it follows by the Principle of Mathematical Induction that:

$\forall n \in \Z_{\ge 0}: 3^{2 n} \equiv 1 \pmod 8$

Then we have:














\(\ds 3^{2 n + 1}\)

\(=\)







\(\ds 3 \times 3^{2 n}\)




















\(\ds \)

\(\equiv\)







\(\ds 3 \times 1\)

\(\ds \pmod 8\)



Congruence of Product














\(\ds \)

\(\equiv\)







\(\ds 3\)

\(\ds \pmod 8\)







and the result follows.
$\blacksquare$


Proof 2
Let the statement be rewritten as:
For all $r \in \Z_{\ge 0}$: 

$3^r \equiv \begin {cases} 1 \pmod 8 & : r = 2 n \\ 3 \pmod 8 & : r = 2 n + 1 \end {cases}$
where $n \in \Z_{\ge 0}$.
We have:














\(\ds 3^2\)

\(=\)







\(\ds 9\)




















\(\ds \)

\(\equiv\)







\(\ds 1\)

\(\ds \pmod 8\)












\(\ds \leadsto \ \ \)





\(\ds \paren {3^2}^n\)

\(\equiv\)







\(\ds 1^n\)

\(\ds \pmod 8\)



Congruence of Powers








\(\ds \leadsto \ \ \)





\(\ds 3^{2 n}\)

\(\equiv\)







\(\ds 1\)

\(\ds \pmod 8\)








Then we have:














\(\ds 3^{2 n + 1}\)

\(=\)







\(\ds 3 \times 3^{2 n}\)




















\(\ds \)

\(\equiv\)







\(\ds 3 \times 1\)

\(\ds \pmod 8\)



Congruence of Product



and the result follows.
$\blacksquare$





