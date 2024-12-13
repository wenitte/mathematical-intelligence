# 

Source: https://proofwiki.org/wiki/Power_Function_on_Base_greater_than_One_tends_to_One_as_Power_tends_to_Zero/Rational_Number

Theorem
Let $a \in \R_{> 0}$ be a strictly positive real number such that $a > 1$.
Let $f: \Q \to \R$ be the real-valued function defined as:

$\map f r = a^r$
where $a^r$ denotes $a$ to the power of $r$.

Then:

$\ds \lim_{r \mathop \to 0} \map f r = 1$


Proof
We start by treating the right-sided limit.
Let $0 < r < 1$.


Lemma
Let $a \in \R$ be a real number such that $a > 1$.
Let $r \in \Q_{> 0}$ be a strictly positive rational number such that $r < 1$.

Then:

$1 < a^r < 1 + a r$
$\Box$

From the lemma:

$1 < a^r < 1 + a r$
Also:














\(\ds \lim_{r \mathop \to 0} \paren {1 + a r}\)

\(=\)







\(\ds 1 + a \times 0\)





Real Polynomial Function is Continuous














\(\ds \)

\(=\)







\(\ds 1\)





Real Zero is Zero Element














\(\ds \)

\(=\)







\(\ds \lim_{r \mathop \to 0} 1\)





Real Polynomial Function is Continuous



So from the Squeeze Theorem for Functions:

$\ds \lim_{r \mathop \to 0^+} a^r = 1$

We now treat the left-sided limit.
Let $-1 < r < 0$.














\(\ds -1\)

\(<\)

\(\, \ds r \, \)

\(\, \ds < \, \)



\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds 0\)

\(<\)

\(\, \ds -r \, \)

\(\, \ds < \, \)



\(\ds 1\)





Order of Real Numbers is Dual of Order of their Negatives








\(\ds \leadsto \ \ \)





\(\ds 1\)

\(<\)

\(\, \ds a^{-r} \, \)

\(\, \ds < \, \)



\(\ds 1 - a r\)





Lemma








\(\ds \leadsto \ \ \)





\(\ds 1\)

\(<\)

\(\, \ds \frac 1 {a^r} \, \)

\(\, \ds < \, \)



\(\ds 1 - a r\)





Real Number to Negative Power: Rational Number








\(\ds \leadsto \ \ \)





\(\ds \frac 1 {1 - a r}\)

\(<\)

\(\, \ds a^r \, \)

\(\, \ds < \, \)



\(\ds 1\)





Ordering of Reciprocals




Also:














\(\ds \lim_{r \mathop \to 0} \dfrac 1 {1 - a r}\)

\(=\)







\(\ds \frac 1 {\ds \lim_{r \mathop \to 0} \paren {1 - a r} }\)





Quotient Rule for Limits of Real Functions














\(\ds \)

\(=\)







\(\ds \frac 1 {1 - a \times 0}\)





Real Polynomial Function is Continuous














\(\ds \)

\(=\)







\(\ds 1\)





Real Zero is Zero Element














\(\ds \)

\(=\)







\(\ds \lim_{r \mathop \to 0} 1\)





Real Polynomial Function is Continuous



So from the Squeeze Theorem for Functions:

$\ds \lim_{r \mathop \to 0^-} a^r = 1$
From Limit iff Limits from Left and Right:

$\ds \lim_{r \mathop \to 0} a^r = 1$
Hence the result.
$\blacksquare$





