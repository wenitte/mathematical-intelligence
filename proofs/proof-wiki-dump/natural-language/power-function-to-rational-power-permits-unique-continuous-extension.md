# 

Source: https://proofwiki.org/wiki/Power_Function_to_Rational_Power_permits_Unique_Continuous_Extension

Theorem
Let $a \in \R_{> 0}$.
Let $f: \Q \to \R$ be the real-valued function defined as:

$\map f q = a^q$
where $a^q$ denotes $a$ to the power of $q$.

Then there exists a unique continuous extension of $f$ to $\R$.


Proof
Consider $I_k := \openint {-k} k$ for arbitrary $k \in \N$.
Let $I_k' = I_k \cap \Q$.
Note that, for all $x, y \in I_k'$:














\(\ds \size {a^x - a^y}\)

\(=\)







\(\ds \size {a^{x - y + y} - a^y}\)




















\(\ds \)

\(=\)







\(\ds \size {a^{x - y} a^y - a^y}\)





Powers of Group Elements














\(\ds \)

\(=\)







\(\ds \size {a^y} \size {a^{x - y} - 1}\)





Absolute Value Function is Completely Multiplicative














\(\ds \)

\(=\)







\(\ds a^y \size {a^{x - y} - 1}\)





Power of Positive Real Number is Positive over Rationals














\(\ds \)

\(\le\)







\(\ds M \size {a^{x - y} - 1}\)





Power Function is Monotone over Rationals



where $M = \map \max {a^{-k}, a^k}$.

Fix $\epsilon \in \R_{> 0}$.
From Power Function tends to One as Power tends to Zero: Rational Number:










\(\ds \exists \delta \in \R_{>0}: \, \)



\(\ds 0\)

\(<\)

\(\, \ds \size {x - y} \, \)

\(\, \ds < \, \)



\(\ds \delta\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(\)

\(\, \ds \size {a^{x - y} - a^0} \, \)

\(\, \ds < \, \)



\(\ds \dfrac \epsilon M\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(\)

\(\, \ds \size {a^{x - y} - 1} \, \)

\(\, \ds < \, \)



\(\ds \dfrac \epsilon M\)





Definition of Power of Zero



where $M$ is defined as above.

Therefore, $\exists \delta \in \R_{> 0}$ such that:














\(\ds \size {x - y}\)

\(<\)







\(\ds \delta\)














\(\ds \leadsto \ \ \)





\(\ds \size {a^x - a^y}\)

\(\le\)







\(\ds M \size {a^{x - y} - 1}\)




















\(\ds \)

\(<\)







\(\ds M \dfrac \epsilon M\)




















\(\ds \)

\(=\)







\(\ds \epsilon\)









That is, $f$ is uniformly continuous on $I_k'$.

From Rationals are Everywhere Dense in Topological Space of Reals, $I_k'$ is everywhere dense in $I_k$.
From Continuous Extension from Dense Subset, there exists a unique continuous extension of $f$ to $I_k$.
Call this function $f_k$.
Define:

$\ds F = \bigcup \set {f_k : k \in \N}$
Note that $\sequence {I_k}$ is an exhausting sequence of sets in $\R$.
By the Union of Functions Theorem, $F$ defines a function $\R \to \R$
From the Pasting Lemma, $F$ is continuous on $\R$.
Hence the result.
$\blacksquare$





