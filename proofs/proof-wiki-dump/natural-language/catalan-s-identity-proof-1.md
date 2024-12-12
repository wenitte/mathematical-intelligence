# 

Source: https://proofwiki.org/wiki/Catalan%27s_Identity/Proof_1

Theorem
${F_n}^2 - F_{n - r} F_{n + r} = \left({-1}\right)^{n - r} {F_r}^2$


Proof 1
From the definition of Fibonacci numbers:

$F_1 = 1, F_2 = 1, F_3 = 2, F_4 = 3$
By Honsberger's Identity:

$F_n = F_{n - r} F_{r - 1} + F_{n - r + 1} F_r$
Also:














\(\ds F_{n + r}\)

\(=\)







\(\ds F_{n - r} F_{2 r - 1} + F_{n - r + 1} F_{2 r}\)





Honsberger's Identity














\(\ds \)

\(=\)







\(\ds F_{n - r} \paren {F_{r - 1}^2 + {F_r}^2} + F_{n - r + 1} \paren {F_{r - 1} F_r + F_r F_{r + 1} }\)





Honsberger's Identity














\(\ds \)

\(=\)







\(\ds F_{n - r} \paren { {F_{r - 1} }^2 + {F_r}^2} + F_{n - r + 1} \paren {F_{r - 1} F_r + F_r \paren {F_{r - 1} + F_r} }\)





Definition of Fibonacci Number














\(\ds \)

\(=\)







\(\ds F_{n - r} \paren { {F_{r - 1} }^2 + {F_r}^2} + F_{n - r + 1} \paren {F_r \paren {F_{r - 1} + F_{r - 1} + F_r} }\)




















\(\ds \)

\(=\)







\(\ds F_{n - r} \paren { {F_{r - 1} }^2 + {F_r}^2} + F_{n - r + 1} \paren {2 F_r F_{r - 1} + {F_r}^2}\)









Therefore:














\(\ds \)

\(\)







\(\ds F_n^2 - F_{n - r} F_{n + r}\)




















\(\ds \)

\(=\)







\(\ds \paren {F_{n - r} F_{r - 1} + F_{n - r + 1} F_r}^2 - F_{n - r} \paren {F_{n - r} \paren { {F_{r - 1} }^2 + {F_r}^2} + F_{n - r + 1} \paren {2 F_r F_{r - 1} + {F_r}^2} }\)





from above














\(\ds \)

\(=\)







\(\ds \paren { {F_{n - r + 1} }^2 {F_r}^2} - \paren { {F_{n - r} }^2 {F_r}^2 + F_{n - r} F_{n - r + 1} {F_r}^2}\)





Expansion and Simplification














\(\ds \)

\(=\)







\(\ds {F_r}^2 \paren { {F_{n - r + 1} }^2 - {F_{n - r} }^2 - F_{n - r} F_{n - r + 1} }\)




















\(\ds \)

\(=\)







\(\ds {F_r}^2 \paren {F_{n - r + 1} \paren {F_{n - r + 1} - F_{n - r} } - {F_{n - r} }^2}\)




















\(\ds \)

\(=\)







\(\ds {F_r}^2 \paren {F_{n - r  + 1} \paren {F_{n - r - 1} } - {F_{n-r} }^2}\)





Definition of Fibonacci Number














\(\ds \)

\(=\)







\(\ds {F_r}^2 \paren {-1}^{n - r}\)





Cassini's Identity














\(\ds \)

\(=\)







\(\ds \paren {-1}^{n - r} {F_r}^2\)









$\blacksquare$


Source of Name
This entry was named for Eugène Charles Catalan.





