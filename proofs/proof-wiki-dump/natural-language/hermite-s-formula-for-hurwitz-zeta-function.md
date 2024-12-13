# 

Source: https://proofwiki.org/wiki/Hermite%27s_Formula_for_Hurwitz_Zeta_Function



Theorem
$\ds \map \zeta {s, q} = \frac 1 {2 q^s} + \frac { q^{1 - s} } {s - 1} + 2 \int_0^\infty \frac {\map \sin {s \arctan \frac x q} } {\paren {q^2 + x^2}^{\frac 1 2 s} \paren {e^{2 \pi x} - 1} } \rd x$
where: 

$\zeta$ is the Hurwitz zeta function
$\map \Re s > 1$
$\map \Re q > 0$.


Proof

This article needs to be linked to other articles.In particular: Some of these are to pages which doing exist yetYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
To prove this theorem, we can make use of Binet's Second Formula for Log Gamma:
Let $q$ be a complex number with a positive real part.
Then: 

$\ds \Ln \map \Gamma q = \paren {q - \frac 1 2} \Ln q - q + \frac 1 2 \ln 2 \pi + 2 \int_0^\infty \frac {\map \arctan {x / q} } {e^{2 \pi x} - 1} \rd x$
Applying the $n$th fractional derivative with respect to $q$ on both sides, we get:














\(\ds \DD_q^n \Ln \map \Gamma q\)

\(=\)







\(\ds \DD_q^n \paren {q - \frac 1 2} \Ln q - \DD_q^n q + \DD_q^n \frac 1 2 \ln 2 \pi + \DD_q^n 2 \int_0^\infty \frac {\map \arctan {x / q} } {e^{2 \pi x} - 1} \rd x\)




















\(\ds \ds \bspsi^{\paren {n - 1} } q\)

\(=\)







\(\ds \DD_q^n \paren {q \map \ln q} - \frac 1 2 \DD_q^{n - 1} {\paren {\frac 1 q} } + \DD_q^{n - 2} \paren 0 + \DD_q^{n - 1} \paren 0 + 2 \int_0^\infty \frac {\DD_q^n \paren {\map \arctan {x / q} } } {e^{2 \pi x} - 1} \rd x\)





setting $\map \Re n \ge 2$














\(\ds \)

\(=\)







\(\ds \DD_q^n \paren {q \map \ln q} - \frac 1 2 \DD_q^{n - 1} {\paren {\frac 1 q} } + 2 \int_0^\infty \frac {\DD_q^n \paren {\map \arctan {x / q} } } {e^{2 \pi x} - 1} \rd x\)





simplifying



Now we can solve the fractional derivatives:














\(\ds \DD_q^{n - 1} {\paren {\frac 1 q} }\)

\(=\)







\(\ds \DD_q^{n - 1} {\paren {q^{-1} } }\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {-1}^{n + 1} \map \Gamma n} {q^n}\)





fractional derivative of a power of $x$
















\(\ds \DD_q^n \paren {q \map \ln q}\)

\(=\)







\(\ds \DD_q^n \paren {\lim_{h \mathop \to 0} q \paren {\frac {q^h - 1} h} }\)





limit definition of the logarithm














\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac 1 h \DD_q^n \paren {q^{1 + h} - q}\)





bringing limits and constants outside














\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac 1 h \paren {\DD_q^n \paren {q^{1 + h} }-\DD_q^{n - 2} \paren 0}\)





$\map \Re n \ge 2$














\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \frac 1 h \paren {1 + h} \paren h \DD_q^{n - 2} \paren {q^{h - 1} }\)





$\map \Re n \ge 2$














\(\ds \)

\(=\)







\(\ds \DD_q^{n - 2} \paren {q^{-1} }\)





the limit can be taken without problems














\(\ds \)

\(=\)







\(\ds \frac {\paren {-1}^n \map \Gamma {n - 1} } {q^{n - 1} }\)





fractional derivative of a power of $x$
















\(\ds \DD_q^n \paren { \map \arctan {x / q} }\)

\(=\)







\(\ds \DD_q^n \int_0^\infty e^{-t q} \frac {\map \sin {t x} } t \rd t\)





integral representation for the arctangent














\(\ds \)

\(=\)







\(\ds \paren {-1}^n \int_0^\infty e^{-tq} \map \sin {tx} t^{n-1} \rd t\)





fractional derivative of an exponential














\(\ds \)

\(=\)







\(\ds \paren {-1}^n \map \Gamma n \paren {q^2 + x^2}^{-\frac 1 2 n} \map \sin {n \map \arctan {\frac x q} }\)





integration process (not too difficult)



So:














\(\ds \bspsi^{\paren {n - 1} } q\)

\(=\)







\(\ds \frac {q^{1 - n} } {n - 1} \map \Gamma n \paren {-1}^n - \frac 1 2 \frac {\paren {-1}^{n + 1} \map \Gamma n} {q^n} + 2 \map \Gamma n \paren {-1}^n \int_0^\infty \frac {\map \sin {n \arctan \frac x q} } {\paren {q^2 + x^2}^{\frac 1 2 n} \paren {e^{2 \pi x} - 1} } \rd x\)




















\(\ds \paren {-1}^n \map \Gamma n \map \bszeta {n, q}\)

\(=\)







\(\ds \frac {q^{1 - n} } {n - 1} \map \Gamma n \paren {-1}^n - \frac 1 2 \frac {\paren {-1}^{n + 1} \map \Gamma n} {q^n} + 2 \map \Gamma n \paren {-1}^n \int_0^\infty \frac {\map \sin {n \arctan \frac x q} } {\paren {q^2 + x^2}^{\frac 1 2 n} \paren {e^{2 \pi x} - 1} } \rd x\)









Dividing both sides by the common factor, we get the initial formula:

$\ds \map \bszeta {n, q} = \frac {q^{1 - n} } {n - 1} + \frac 1 {2 q^n} + 2 \int_0^\infty \frac {\map \sin {n \arctan \frac x q} } {\paren {q^2 + x^2}^{\frac 1 2 n} \paren {e^{2 \pi x} - 1} } \rd x$
$\blacksquare$



Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: Warning: the proof above assumes $\map \Re n \ge 2$, which is not exactly the statement found in the theorem ( $\map \Re n \ge 1$ ). It needs to be made so as to be consistent with the problem statement.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.

This article needs proofreading.In particular: As stated above, proof isn't exactly correct, it needs some kind of fixing at the momentIf you believe all issues are dealt with, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Source of Name
This entry was named for Charles Hermite.


Sources
1920: E.T. Whittaker and G.N. Watson: A Course of Modern Analysis (3rd ed.): $13.2$: Hermite's formula for $\map \zeta {s, a}$




