# 

Source: https://proofwiki.org/wiki/Partial_Gamma_Function_expressed_as_Integral/Lemma

Theorem
Let $m \in \Z_{\ge 1}$.
Then:

$(1): \quad \ds \int_0^m \paren {1 - \frac t m}^m t^{x - 1} \rd t = m^x \int_0^1 \paren {1 - t}^m t^{x - 1} \rd t$
for $x > 0$.


Proof
Let:














\(\ds z\)

\(=\)







\(\ds \frac t m\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d t} {\d z}\)

\(=\)







\(\ds m\)









Recalculating the limits:














\(\ds t\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds z\)

\(=\)







\(\ds 0\)




















\(\ds t\)

\(=\)







\(\ds m\)














\(\ds \leadsto \ \ \)





\(\ds z\)

\(=\)







\(\ds 1\)










Hence:














\(\ds \paren {1 - \frac t m}^m\)

\(=\)







\(\ds \paren {1 - z}^m\)




















\(\ds t^{x - 1}\)

\(=\)







\(\ds \paren {m z}^{x - 1}\)




















\(\ds \)

\(=\)







\(\ds m^{x - 1} z^{x - 1}\)










Thus $(1)$ can be written:














\(\ds \int_0^m \paren {1 - \frac t m}^m t^{x - 1} \rd t\)

\(=\)







\(\ds m^x \int_0^1 \paren {1 - z}^m z^{x - 1} \rd z\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds m^x \int_0^1 \paren {1 - t}^m t^{x - 1} \rd t\)





changing the name of the dummy variable



$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.5$: Permutations and Factorials: Exercise $19$




