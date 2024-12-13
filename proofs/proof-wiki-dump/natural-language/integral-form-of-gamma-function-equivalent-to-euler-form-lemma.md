# 

Source: https://proofwiki.org/wiki/Integral_Form_of_Gamma_Function_equivalent_to_Euler_Form/Lemma

Lemma for Integral Form of Gamma Function equivalent to Euler Form
Let $0 \le t \le m$.
Then:

$0 \le e^{-t} - \paren {1 - \dfrac t m}^m \le t^2 \dfrac {e^{-t} } m$


Proof
From Exponential of x not less than 1+x:

$1 + x \le e^x$
Let $x = \pm \dfrac t m$.

Then:














\(\ds 1 - \dfrac t m\)

\(\le\)







\(\ds e^{-t/m}\)














\(\ds \leadsto \ \ \)





\(\ds \paren {1 - \dfrac t m}^m\)

\(\le\)







\(\ds e^{-t}\)









and:














\(\ds 1 + \dfrac t m\)

\(\le\)







\(\ds e^{t/m}\)














\(\ds \leadsto \ \ \)





\(\ds \paren {1 + \dfrac t m}^m\)

\(\le\)







\(\ds e^t\)










Then:














\(\ds e^{-t}\)

\(\ge\)







\(\ds \paren {1 - \dfrac t m}^m\)




















\(\ds \)

\(=\)







\(\ds e^t \paren {1 - \dfrac t m}^m e^{-t}\)




















\(\ds \)

\(\ge\)







\(\ds e^{-t} \paren {1 - \dfrac t m}^m \paren {1 + \dfrac t m}^m\)




















\(\ds \)

\(=\)







\(\ds e^{-t} \paren {1 - \dfrac {t^2} {m^2} }^m\)





Difference of Two Squares














\(\ds \)

\(\ge\)







\(\ds e^{-t} \paren {1 - \dfrac {t^2} m}\)





Corollary to Bernoulli's Inequality




Hence:














\(\ds 0\)

\(\le\)







\(\ds e^{-t} - \left({1 - \dfrac t m}\right)^m\)




















\(\ds \)

\(\le\)







\(\ds t^2 \dfrac {e^{-t} } m\)









$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.5$: Permutations and Factorials: Exercise $20$




