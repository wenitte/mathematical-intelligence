# 

Source: https://proofwiki.org/wiki/Prime_Power_of_Sum_Modulo_Prime



Theorem
Let $p$ be a prime number.
Then:

$\forall n \in \N_{> 0}: \paren {a + b}^{p^n} \equiv a^{p^n} + b^{p^n} \pmod p$


Corollary
Let $p$ be a prime number.
Then:

$\forall n \in \N_{> 0}: \paren {1 + b}^{p^n} \equiv 1 + b^{p^n} \pmod p$


Proof
Proof by induction:
For all $n \in \N_{> 0}$, let $\map P n$ be the proposition:

$\paren {a + b}^{p^n} \equiv a^{p^n} + b^{p^n} \pmod p$


Basis for the Induction
First from Power of Sum Modulo Prime we have that $\map P 1$ is true:

$\paren {a + b}^p \equiv a^p + b^p \pmod p$

This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$\paren {a + b}^{p^k} \equiv a^{p^k} + b^{p^k} \pmod p$

Then we need to show:

$\paren {a + b}^{p^{k + 1} } \equiv a^{p^{k + 1} } + b^{p^{k + 1} } \pmod p$


Induction Step
This is our induction step:














\(\ds \paren {a + b}^{p^k}\)

\(\equiv\)







\(\ds a^{p^k} + b^{p^k}\)

\(\ds \pmod p\)



Induction Hypothesis








\(\ds \leadsto \ \ \)





\(\ds \paren {\paren {a + b}^{p^k} }^p\)

\(\equiv\)







\(\ds \paren {a^{p^k} + b^{p^k} }^p\)

\(\ds \pmod p\)



Congruence of Powers








\(\ds \leadsto \ \ \)





\(\ds \paren {\paren {a + b}^{p^k} }^p\)

\(\equiv\)







\(\ds \paren {a^{p^k} }^p + \paren {b^{p^k} }^p\)

\(\ds \pmod p\)



Basis for the Induction








\(\ds \leadsto \ \ \)





\(\ds \paren {a + b}^{p^{k + 1} }\)

\(\equiv\)







\(\ds a^{p^{k + 1} } + b^{p^{k + 1} }\)

\(\ds \pmod p\)








So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \in \N_{> 0}: \paren {a + b}^{p^n} \equiv a^{p^n} + b^{p^n} \pmod p$
$\blacksquare$


Also see
Power of Sum Modulo Prime




