# 

Source: https://proofwiki.org/wiki/Power_Function_on_Base_between_Zero_and_One_Tends_to_One_as_Power_Tends_to_Zero/Rational_Number

Theorem
Let $a \in \R_{> 0}$ be a strictly positive real number such that $0 < a < 1$.
Let $f: \Q \to \R$ be the real-valued function defined as:

$\map f r = a^r$
where $a^r$ denotes $a$ to the power of $r$.

Then:

$\ds \lim_{r \mathop \to 0} \map f r = 1$


Proof
From Ordering of Reciprocals:

$0 < a < 1 \implies 1 < \dfrac 1 a$
So:














\(\ds \lim_{r \mathop \to 0} \paren {\frac 1 a}^r\)

\(=\)







\(\ds 1\)





Power Function on Base greater than One tends to One as Power tends to Zero: Rational Number








\(\ds \leadsto \ \ \)





\(\ds \lim_{r \mathop \to 0} \frac 1 {a^r}\)

\(=\)







\(\ds 1\)





Power of Quotient: Rational Numbers








\(\ds \leadsto \ \ \)





\(\ds \frac 1 {\ds \lim_{r \mathop \to 0} a^r}\)

\(=\)







\(\ds 1\)





Quotient Rule for Limits of Real Functions








\(\ds \leadsto \ \ \)





\(\ds \lim_{r \mathop \to 0} a^r\)

\(=\)







\(\ds 1\)





taking reciprocal of each side



$\blacksquare$





