# 

Source: https://proofwiki.org/wiki/Ordering_on_Integers_is_Transitive

Theorem
Let $\eqclass {a, b} {}$ denote an integer, as defined by the formal definition of integers.
Then:














\(\ds \eqclass {a, b} {}\)

\(\le\)







\(\ds \eqclass {c, d} {}\)


















\(\, \ds \land \, \)

\(\ds \eqclass {c, d} {}\)

\(\le\)







\(\ds \eqclass {e, f} {}\)














\(\ds \implies \ \ \)





\(\ds \eqclass {a, b} {}\)

\(\le\)







\(\ds \eqclass {e, f} {}\)









That is, ordering on the integers is transitive.


Proof
By the formal definition of integers, we have that $a, b, c, d, e, f$ are all natural numbers.
To eliminate confusion between integer ordering and the ordering on the natural numbers, let $a \preccurlyeq b$ denote that the natural number $a$ is less than or equal to the natural number $b$.
We have:














\(\ds \eqclass {a, b} {}\)

\(\le\)







\(\ds \eqclass {c, d} {}\)










\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds a + d\)

\(\preccurlyeq\)







\(\ds b + c\)





Definition of Ordering on Integers














\(\ds \eqclass {c, d} {}\)

\(<\)







\(\ds \eqclass {e, f} {}\)










\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds c + f\)

\(\preccurlyeq\)







\(\ds d + e\)





Definition of Ordering on Integers








\(\ds \leadsto \ \ \)





\(\ds a + d + f\)

\(\preccurlyeq\)







\(\ds b + c + f\)





adding $f$ to both sides of $(1)$








\(\ds \leadsto \ \ \)





\(\ds a + d + f\)

\(\preccurlyeq\)







\(\ds b + d + e\)





from $(2)$: $b + \paren {c + f} \preccurlyeq b + \paren {d + e}$








\(\ds \leadsto \ \ \)





\(\ds a + f\)

\(\preccurlyeq\)







\(\ds b + e\)





subtracting $d$ from both sides








\(\ds \leadsto \ \ \)





\(\ds \eqclass {a, b} {}\)

\(\le\)







\(\ds \eqclass {e, f} {}\)





Definition of Ordering on Integers



$\blacksquare$





