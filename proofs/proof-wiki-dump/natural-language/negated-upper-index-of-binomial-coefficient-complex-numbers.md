# 

Source: https://proofwiki.org/wiki/Negated_Upper_Index_of_Binomial_Coefficient/Complex_Numbers

Theorem
For all $z, w \in \C$ such that it is not the case that $z$ is a negative integer and $t, w$ integers:

$\dbinom z w = \dfrac {\map \sin {\pi \paren {w - z - 1} } } {\map \sin {\pi z} } \dbinom {w - z - 1} w$
where $\dbinom z w$ is a binomial coefficient.


Proof
By definition of Binomial Coefficient:

$\dbinom z w = \ds \lim_{\zeta \mathop \to z} \lim_{\tau \mathop \to w} \dfrac {\map \Gamma {\zeta + 1} } {\map \Gamma {\omega + 1} \map \Gamma {\zeta - \omega + 1} }$

Euler's Reflection Formula gives:

$\forall z \notin \Z: \map \Gamma z \map \Gamma {1 - z} = \dfrac \pi {\map \sin {\pi z} }$

Thus:














\(\ds \map \Gamma {\zeta - \omega + 1} \map \Gamma {1 - \paren {\zeta - \omega + 1} }\)

\(=\)







\(\ds \dfrac \pi {\map \sin {\pi \paren {\zeta - \omega + 1} } }\)





Euler's Reflection Formula




\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \map \Gamma {\zeta - \omega + 1}\)

\(=\)







\(\ds \dfrac \pi {\map \sin {\pi \paren {\zeta - \omega + 1} } \map \Gamma {\omega - \zeta} }\)










and:














\(\ds \map \Gamma {\zeta + 1} \map \Gamma {1 - \paren {\zeta + 1} }\)

\(=\)







\(\ds \dfrac \pi {\map \sin {\pi \paren {\zeta + 1} } }\)





Euler's Reflection Formula




\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \map \Gamma {\zeta + 1}\)

\(=\)







\(\ds \dfrac \pi {\map \sin {\pi \paren {\zeta + 1} } \map \Gamma {-\zeta} }\)










Hence:














\(\ds \dbinom z w\)

\(=\)







\(\ds \lim_{\zeta \mathop \to z} \lim_{\tau \mathop \to w} \dfrac {\map \Gamma {\zeta + 1} } {\map \Gamma {\omega + 1} \map \Gamma {\zeta - \omega + 1} }\)





Definition of Binomial Coefficient














\(\ds \)

\(=\)







\(\ds \lim_{\zeta \mathop \to z} \lim_{\tau \mathop \to w} \dfrac {\map \Gamma {\zeta + 1} \paren {\map \sin {\pi \paren {\zeta - \omega + 1} } \map \Gamma {\omega - \zeta} } } {\map \Gamma {\omega + 1} \pi}\)





from $(1)$














\(\ds \)

\(=\)







\(\ds \lim_{\zeta \mathop \to z} \lim_{\tau \mathop \to w} \dfrac {\pi \paren {\map \sin {\pi \paren {\zeta - \omega + 1} } \map \Gamma {\omega - \zeta} } } {\paren {\map \sin {\pi \paren {\zeta + 1} } \map \Gamma {-\zeta} } \map \Gamma {\omega + 1} \pi}\)





from $(2)$














\(\ds \)

\(=\)







\(\ds \lim_{\zeta \mathop \to z} \lim_{\tau \mathop \to w} \dfrac {\map \sin {\pi \paren {\zeta - \omega + 1} } } {\map \sin {\pi \paren {\zeta + 1} } } \dfrac {\map \Gamma {\omega - \zeta} } {\map \Gamma {-\zeta} \map \Gamma {\omega + 1} }\)





rearranging














\(\ds \)

\(=\)







\(\ds \dfrac {\map \sin {\pi \paren {z - w + 1} } } {\map \sin {\pi \paren {z + 1} } } \ds \lim_{\zeta \mathop \to z} \lim_{\tau \mathop \to w} \dfrac {\map \Gamma {\omega - \zeta} } {\map \Gamma {-\zeta} \map \Gamma {\omega + 1} }\)





Combination Theorem for Limits of Complex Functions














\(\ds \)

\(=\)







\(\ds \dfrac {\map \sin {\pi \paren {z - w + 1} } } {\map \sin {\pi \paren {z + 1} } } \ds \lim_{\zeta \mathop \to z} \lim_{\tau \mathop \to w} \dfrac {\map \Gamma {\paren {\omega - \zeta - 1} + 1} } {\map \Gamma {\paren {\omega - \zeta - 1} + \omega + 1} \map \Gamma {\omega + 1} }\)





Combination Theorem for Limits of Complex Functions and rearrangement














\(\ds \)

\(=\)







\(\ds \dfrac {\map \sin {\pi \paren {z - w + 1} } } {\map \sin {\pi \paren {z + 1} } } \dbinom {w - z - 1} w\)





Definition of Binomial Coefficient




Now we have:














\(\ds \map \sin {\pi \paren {z - w + 1} }\)

\(=\)







\(\ds -\map \sin {-\pi \paren {z - w + 1} }\)





Sine Function is Odd














\(\ds \)

\(=\)







\(\ds -\map \sin {\pi \paren {-z + w - 1} }\)




















\(\ds \)

\(=\)







\(\ds -\map \sin {\pi \paren {w - z - 1} }\)










and:














\(\ds \map \sin {\pi \paren {z + 1} }\)

\(=\)







\(\ds \map \sin {\pi z + \pi}\)




















\(\ds \)

\(=\)







\(\ds -\map \sin {\pi z}\)





Sine of Angle plus Straight Angle




Thus:














\(\ds \dfrac {\map \sin {\pi \paren {z - w + 1} } } {\map \sin {\pi \paren {z + 1} } }\)

\(=\)







\(\ds \dfrac {-\map \sin {\pi \paren {w - z - 1} } } {-\map \sin {\pi z} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\map \sin {\pi \paren {w - z - 1} } } {\map \sin {\pi z} }\)









and the result follows.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.6$: Binomial Coefficients: Exercise $42$ (Solution)




