# 

Source: https://proofwiki.org/wiki/Number_of_Digits_to_Represent_Integer_in_Given_Number_Base

Theorem
Let $n \in \Z_{>0}$ be a (strictly) positive integer.
Let $b \in \Z$ be an integer such that $b > 1$.
Let $d$ denote the number of digits of $n$ when represented in base $b$.

Then:

$d = \ceiling {\map {\log_b} {n + 1} }$
where $\ceiling {\, \cdot \,}$ denotes the ceiling function.


Proof
Let $n$ have $d$ digits.
Then:














\(\ds b^{d - 1}\)

\(\le\)

\(\, \ds n \, \)

\(\, \ds < \, \)



\(\ds b^d\)





Basis Representation Theorem








\(\ds \leadsto \ \ \)





\(\ds b^{d - 1}\)

\(<\)

\(\, \ds n + 1 \, \)

\(\, \ds \le \, \)



\(\ds b^d\)














\(\ds \leadsto \ \ \)





\(\ds d - 1\)

\(<\)

\(\, \ds \map {\log_b} {n + 1} \, \)

\(\, \ds \le \, \)



\(\ds d\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(\)

\(\, \ds \ceiling {\map {\log_b} {n + 1} } \, \)

\(\, \ds = \, \)



\(\ds d\)





Integer equals Ceiling iff Number between Integer and One Less



$\blacksquare$





