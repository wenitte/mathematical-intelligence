# 

Source: https://proofwiki.org/wiki/Exponential_of_2_m_i_Arccotangent_of_p

Theorem
$\map \exp {2 m i \arccot p} \paren {\dfrac {p i + 1} {p i - 1} }^m = 1$


Proof
Let $z = \arccot p$.
Then:














\(\ds p\)

\(=\)







\(\ds \frac {\cos z} {\sin z}\)





Definition of Real Arccotangent








\(\ds \leadsto \ \ \)





\(\ds p\)

\(=\)







\(\ds i \dfrac {\map \exp {i z} + \map \exp {-i z} } {\map \exp {i z} - \map \exp {-i z} }\)





Euler's Cotangent Identity














\(\ds \)

\(=\)







\(\ds \frac {i \paren {\map \exp {2 i z} + 1} } {\map \exp {2 i z} - 1}\)














\(\ds \leadsto \ \ \)





\(\ds p \paren {\map \exp {2 i z} - 1}\)

\(=\)







\(\ds i \paren {\map \exp {2 i z} + 1}\)














\(\ds \leadsto \ \ \)





\(\ds \paren {p - i} \map \exp {2 i z}\)

\(=\)







\(\ds p + i\)














\(\ds \leadsto \ \ \)





\(\ds \map \exp {2 i z}\)

\(=\)







\(\ds \frac {p + i} {p - i}\)










So we have:














\(\ds \map \exp {2 m i \arccot p}\)

\(=\)







\(\ds \paren {\map \exp {2 i \arccot p} }^m\)




















\(\ds \)

\(=\)







\(\ds \paren {\frac {p + i} {p - i} }^m\)










Now:














\(\ds \paren {\frac {p + i} {p - i} } \paren {\frac {p i + 1} {p i - 1} }\)

\(=\)







\(\ds \frac {p^2 i + p i^2 + p + i} {p^2 i - p i^2 - p + i}\)




















\(\ds \)

\(=\)







\(\ds \frac {p^2 i + i} {p^2 i + i}\)




















\(\ds \)

\(=\)







\(\ds 1\)









and the result follows.
$\blacksquare$


Sources
1981: Murray R. Spiegel: Theory and Problems of Complex Variables (SI ed.) ... (previous) ... (next): $1$: Complex Numbers: Supplementary Problems: Miscellaneous Problems: $132$




