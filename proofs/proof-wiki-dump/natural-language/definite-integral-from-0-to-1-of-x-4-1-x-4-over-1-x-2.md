# 

Source: https://proofwiki.org/wiki/Definite_Integral_from_0_to_1_of_x%5E4_(1_-_x)%5E4_over_(1_%2B_x%5E2)

Theorem













\(\ds \int_0^1 \dfrac {x^4 \paren {1 - x}^4} {1 + x^2} \rd x\)

\(=\)







\(\ds \dfrac {22} 7 - \pi\)




















\(\ds \)

\(\approx\)







\(\ds 0 \cdotp 001264489\)









This sequence is A003077 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).


Proof













\(\ds \int_0^1 \dfrac {x^4 \paren {1 - x}^4} {1 + x^2} \rd x\)

\(=\)







\(\ds \int_0^1 \dfrac {x^4 \paren {1 - 4 x + 6 x^2 - 4 x^3 + x^4} } {1 + x^2} \rd x\)





Fourth Power of Difference














\(\ds \)

\(=\)







\(\ds \int_0^1 \dfrac {x^4} {1 + x^2} \rd x - 4 \int_0^1 \dfrac {x^5} {1 + x^2} \rd x + 6 \int_0^1 \dfrac {x^6} {1 + x^2} \rd x - 4 \int_0^1 \dfrac {x^7} {1 + x^2} \rd x + \int_0^1 \dfrac {x^8} {1 + x^2} \rd x\)





Linear Combination of Definite Integrals




We then establish a reduction formula:














\(\ds \dfrac {x^m} {1 + x^2}\)

\(=\)







\(\ds \dfrac {x^{m - 2} \paren {1 + x^2} - x^{m - 2} } {1 + x^2}\)










\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds x^{m - 2} - \dfrac {x^{m - 2} } {1 + x^2}\)










Then it is a matter of evaluating the individual integrals.














\(\ds \int_0^1 \dfrac {x^4} {1 + x^2} \rd x\)

\(=\)







\(\ds \int_0^1 \paren {x^2 - \dfrac {x^2} {1 + x^2} } \rd x\)





from $(1)$














\(\ds \)

\(=\)







\(\ds \int_0^1 x^2 \rd x - \int_0^1 \dfrac {x^2} {1 + x^2} \rd x\)





Linear Combination of Definite Integrals














\(\ds \)

\(=\)







\(\ds \intlimits {\dfrac {x^3} 3} 0 1 - \int_0^1 \dfrac {x^2} {1 + x^2} \rd x\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \intlimits {\dfrac {x^3} 3} 0 1 - \bigintlimits {x - \arctan x} 0 1\)





Primitive of $\dfrac {x^2} {x^2 + a^2}$














\(\ds \)

\(=\)







\(\ds \dfrac 1 3 - \paren {1 - \arctan 1} - \paren {0 - \arctan 0}\)





plugging in the limits




\(\text {(2)}: \quad\)









\(\ds \)

\(=\)







\(\ds \dfrac \pi 4 - \dfrac 2 3\)





simplifying


















\(\ds \int_0^1 \dfrac {x^5} {1 + x^2} \rd x\)

\(=\)







\(\ds \int_0^1 \paren {x^3 - \dfrac {x^3} {1 + x^2} } \rd x\)





from $(1)$














\(\ds \)

\(=\)







\(\ds \int_0^1 x^3 \rd x - \int_0^1 \dfrac {x^3} {1 + x^2} \rd x\)





Linear Combination of Definite Integrals














\(\ds \)

\(=\)







\(\ds \intlimits {\dfrac {x^4} 4} 0 1 - \int_0^1 \dfrac {x^3} {1 + x^2} \rd x\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \intlimits {\dfrac {x^4} 4} 0 1 - \intlimits {\frac {x^2} 2 - \frac {a^2} 2 \, \map \ln {x^2 + a^2} } 0 1\)





Primitive of $\dfrac {x^3} {x^2 + a^2}$














\(\ds \)

\(=\)







\(\ds \dfrac 1 4 - \paren {\paren {\dfrac 1 2 - 0} - \paren {\frac 1 2 \, \map \ln {1 + 1^2} - \frac 1 2 \, \map \ln {1 + 0^2} } }\)





plugging in the limits














\(\ds \)

\(=\)







\(\ds \dfrac 1 4 - \dfrac 1 2 + \frac 1 2 \ln 2\)





simplifying




\(\text {(3)}: \quad\)









\(\ds \)

\(=\)







\(\ds \dfrac {\ln 2} 2 - \dfrac 1 4\)





simplifying








\(\ds \leadsto \ \ \)





\(\ds -4 \int_0^1 \dfrac {x^5} {1 + x^2} \rd x\)

\(=\)







\(\ds 1 - 2 \ln 2\)
























\(\ds \int_0^1 \dfrac {x^6} {1 + x^2} \rd x\)

\(=\)







\(\ds \int_0^1 \paren {x^4 - \dfrac {x^4} {1 + x^2} } \rd x\)





from $(1)$














\(\ds \)

\(=\)







\(\ds \int_0^1 x^4 \rd x - \int_0^1 \dfrac {x^4} {1 + x^2} \rd x\)





Linear Combination of Definite Integrals














\(\ds \)

\(=\)







\(\ds \intlimits {\dfrac {x^5} 5} 0 1 - \int_0^1 \dfrac {x^4} {1 + x^2} \rd x\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \intlimits {\dfrac {x^5} 5} 0 1 - \paren {\dfrac \pi 4 - \dfrac 2 3}\)





from $(2)$














\(\ds \)

\(=\)







\(\ds \dfrac 1 5 - \dfrac \pi 4 + \dfrac 2 3\)





plugging in the limits




\(\text {(4)}: \quad\)









\(\ds \)

\(=\)







\(\ds \dfrac {13} {15} - \dfrac \pi 4\)





simplifying








\(\ds \leadsto \ \ \)





\(\ds 6 \int_0^1 \dfrac {x^6} {1 + x^2} \rd x\)

\(=\)







\(\ds \dfrac {26} 5 - \dfrac {3 \pi} 2\)
























\(\ds \int_0^1 \dfrac {x^7} {1 + x^2} \rd x\)

\(=\)







\(\ds \int_0^1 \paren {x^5 - \dfrac {x^5} {1 + x^2} } \rd x\)





from $(1)$














\(\ds \)

\(=\)







\(\ds \int_0^1 x^5 \rd x - \int_0^1 \dfrac {x^5} {1 + x^2} \rd x\)





Linear Combination of Definite Integrals














\(\ds \)

\(=\)







\(\ds \intlimits {\dfrac {x^6} 6} 0 1 - \int_0^1 \dfrac {x^5} {1 + x^2} \rd x\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \intlimits {\dfrac {x^6} 6} 0 1 - \paren {\dfrac {\ln 2} 2 - \dfrac 1 4}\)





from $(3)$














\(\ds \)

\(=\)







\(\ds \dfrac 1 6 - \dfrac {\ln 2} 2 + \dfrac 1 4\)





plugging in the limits














\(\ds \)

\(=\)







\(\ds \dfrac 5 {12} - \dfrac {\ln 2} 2\)





simplifying








\(\ds \leadsto \ \ \)





\(\ds -4 \int_0^1 \dfrac {x^7} {1 + x^2} \rd x\)

\(=\)







\(\ds 2 \ln 2 - \dfrac 5 3\)
























\(\ds \int_0^1 \dfrac {x^8} {1 + x^2} \rd x\)

\(=\)







\(\ds \int_0^1 \paren {x^6 - \dfrac {x^6} {1 + x^2} } \rd x\)





from $(1)$














\(\ds \)

\(=\)







\(\ds \int_0^1 x^6 \rd x - \int_0^1 \dfrac {x^6} {1 + x^2} \rd x\)





Linear Combination of Definite Integrals














\(\ds \)

\(=\)







\(\ds \intlimits {\dfrac {x^7} 7} 0 1 - \int_0^1 \dfrac {x^6} {1 + x^2} \rd x\)





Primitive of Power














\(\ds \)

\(=\)







\(\ds \intlimits {\dfrac {x^7} 7} 0 1 - \paren {\dfrac {13} {15} - \dfrac \pi 4}\)





from $(4)$














\(\ds \)

\(=\)







\(\ds \dfrac 1 7 - \dfrac {13} {15} + \dfrac \pi 4\)





plugging in the limits




It remains to gather up the terms.
First the terms in $x^5$ and $x^7$, as there is some important cancelling out:














\(\ds \paren {-4 \int_0^1 \dfrac {x^5} {1 + x^2} \rd x} + \paren {-4 \int_0^1 \dfrac {x^7} {1 + x^2} \rd x}\)

\(=\)







\(\ds \paren {1 - 2 \ln 2} + \paren {2 \ln 2 - \dfrac 5 3}\)




















\(\ds \)

\(=\)







\(\ds 1 - \dfrac 5 3\)




















\(\ds \)

\(=\)







\(\ds -\dfrac 2 3\)










Thus we continue:














\(\ds \int_0^1 \dfrac {x^4 \paren {1 - x}^4} {1 + x^2} \rd x\)

\(=\)







\(\ds \paren {\dfrac \pi 4 - \dfrac 2 3} - \dfrac 2 3 + \paren {\dfrac {26} 5 - \dfrac {3 \pi} 2} + \paren {\dfrac 1 7 - \dfrac {13} {15} + \dfrac \pi 4}\)




















\(\ds \)

\(=\)







\(\ds \paren {-\dfrac 2 3 - \dfrac 2 3} + \dfrac 1 7 + \dfrac {26} 5 - \dfrac {13} {15} - \pi\)





rearranging, and resolving the multiples of $\pi$














\(\ds \)

\(=\)







\(\ds \dfrac 1 7 + \dfrac {78 - 13 - 10 - 10} {15} - \pi\)





gathering all the multiples of $\dfrac 1 {15}$














\(\ds \)

\(=\)







\(\ds 3 + \dfrac 1 7  - \pi\)





arithmetic



The result follows.
$\blacksquare$


Sources
1983: François Le Lionnais and Jean Brette: Les Nombres Remarquables ... (previous) ... (next): $0,001264489 \ldots$




