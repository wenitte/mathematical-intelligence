# 

Source: https://proofwiki.org/wiki/Cosine_of_Integer_Multiple_of_Argument/Formulation_9



Theorem
For $n \in \Z_{>1}$:

$\cos n \theta = \map \sin {\paren {n - 1} \theta} \paren {a_0 + \cfrac 1 {a_1 + \cfrac 1 {a_2 + \cfrac 1 {\ddots \cfrac {} {a_{n - r} } } } } }$
where:

$r = \begin {cases} 1 & : \text {$n$ is even} \\ 2 & : \text {$n$ is odd} \end {cases}$
$a_k = \begin {cases} -2 \sin \theta & : \text {$k$ is even  and $k < n - 1$} \\ 2 \sin \theta & : \text {$k$ is odd} \\ \sin \theta & : k = n - 1 \end {cases}$


Proof













\(\ds \map \cos {n \theta}\)

\(=\)







\(\ds \paren {-2 \sin \theta } \map \sin {\paren {n - 1 } \theta}  + \map \cos {\paren {n - 2 } \theta}\)





Line 1: Cosine of Integer Multiple of Argument/Formulation 6














\(\ds \)

\(=\)







\(\ds \map \sin {\paren {n - 1 } \theta} \paren { -2 \sin \theta  + \frac {\map \cos {\paren {n - 2 } \theta} } {\map \sin {\paren {n - 1 } \theta} } }\)





Line 2: Factor out $\map \sin {\paren {n - 1 } \theta}$














\(\ds \)

\(=\)







\(\ds \map \sin {\paren {n - 1 } \theta} \paren { -2 \sin \theta + \cfrac 1 {\cfrac {\map \sin {\paren {n - 1 } \theta} } {\map \cos {\paren {n - 2 } \theta} } } }\)





Line 3: Move the numerator to the denominator














\(\ds \)

\(=\)







\(\ds \map \sin {\paren {n - 1 } \theta} \paren { -2 \sin \theta + \cfrac 1 {\cfrac {\paren {2 \sin \theta } \map \cos {\paren {n - 2 } \theta}  + \map \sin {\paren {n - 3 } \theta}  } {\map \cos {\paren {n - 2 } \theta} } } }\)





Line 4: Sine of Integer Multiple of Argument/Formulation 6














\(\ds \)

\(=\)







\(\ds \map \sin {\paren {n - 1 } \theta} \paren { -2 \sin \theta + \cfrac 1 {2 \sin \theta + \cfrac {\map \sin {\paren {n - 3 } \theta} } {\map \cos {\paren {n - 2 } \theta} } } }\)





Line 5: Simplify expression














\(\ds \)

\(=\)







\(\ds \map \sin {\paren {n - 1 } \theta} \paren { -2 \sin \theta + \cfrac 1 {2 \sin \theta + \cfrac 1 {\cfrac {\map \cos {\paren {n - 2 } \theta} } {\map \sin {\paren {n - 3 } \theta} } } } }\)





Line 6: Move the numerator to the denominator














\(\ds \)

\(=\)







\(\ds \map \sin {\paren {n - 1 } \theta} \paren { -2 \sin \theta + \cfrac 1 {2 \sin \theta + \cfrac 1 {\cfrac {\paren {-2 \sin \theta } \map \sin {\paren {n - 3 } \theta}  + \map \cos {\paren {n - 4 } \theta}  } {\map \sin {\paren {n - 3} \theta} } } } }\)





Line 7: Cosine of Integer Multiple of Argument/Formulation 6














\(\ds \)

\(=\)







\(\ds \map \sin {\paren {n - 1 } \theta} \paren { -2 \sin \theta + \cfrac 1 {2 \sin \theta + \cfrac 1 {-2 \sin \theta + \cfrac {\map \cos {\paren {n - 4 } \theta}  } {\map \sin {\paren {n - 3} \theta} } } } }\)





Line 8: Simplify expression




By comparing Line 2 to Line 8, we see that:


This article contains statements that are justified by handwavery.In particular: Same problem as with the corresponding sine formula.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding precise reasons why such statements hold.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Handwaving}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.













\(\ds \frac {\map \cos {\paren {n - 2 k} \theta} } {\map \sin {\paren {n - \paren {2 k - 1} } \theta} }\)

\(=\)







\(\ds \paren {\cfrac 1 {2 \sin \theta + \cfrac 1 {-2 \sin \theta + \cfrac {\map \cos {\paren {n - 2 \paren {k + 1 } } \theta} } {\map \sin {\paren {n - \paren {2 \paren {k + 1} - 1 } } \theta} } } } }\)










Therefore, the terminal denominator will be:

$-2 \sin \theta + \dfrac {\map \cos {\paren {n - 2 k} \theta} } {\map \sin {\paren {n - \paren {2 k - 1} } \theta} }$

Assume $n$ even:

$n = 2 k$













\(\ds \)

\(\)







\(\ds -2 \sin \theta + \frac {\map \cos {\paren {2 k - 2 k} \theta} } {\map \sin {\paren {2 k - \paren {2 k - 1 } } \theta} }\)




















\(\ds \)

\(=\)







\(\ds -2 \sin \theta + \frac {\cos 0} {\sin \theta}\)




















\(\ds \)

\(=\)







\(\ds -2 \sin \theta + \frac 1 {\sin \theta}\)





Final term is $\sin \theta$




Assume $n$ odd:

$n = 2 k + 1$













\(\ds \)

\(\)







\(\ds -2 \sin \theta + \frac {\map \cos {\paren {2 k + 1 - 2 k} \theta} } {\map \sin {\paren {2 k + 1 - \paren {2 k - 1} } \theta} }\)




















\(\ds \)

\(=\)







\(\ds -2 \sin \theta + \frac {\cos \theta} {\sin 2 \theta}\)




















\(\ds \)

\(=\)







\(\ds -2 \sin \theta + \cfrac 1 {\cfrac {\sin 2 \theta} {\cos \theta} }\)




















\(\ds \)

\(=\)







\(\ds -2 \sin \theta + \cfrac 1 {\cfrac {2 \sin \theta \cos \theta} {\cos \theta} }\)





Double Angle Formulas/Sine














\(\ds \)

\(=\)







\(\ds -2 \sin \theta + \frac 1 {2 \sin \theta}\)





Final term is $2 \sin \theta$



Therefore:

$\cos n \theta = \map \cos {\paren {n - 1} \theta} \paren {a_0 + \cfrac 1 {a_1 + \cfrac 1 {a_2 + \cfrac 1 {\ddots \cfrac {} {a_{n - r} } } } } }$
where:

$r = \begin {cases} 1 & : \text {$n$ is even} \\ 2 & : \text {$n$ is odd} \end {cases}$
$a_k = \begin {cases} -2 \sin \theta & : \text {$k$ is even and $k < n - 1$} \\ 2 \sin \theta & : \text {$k$ is odd} \\ \sin \theta & : k = n - 1 \end {cases}$
$\blacksquare$


Examples
Cosine of Quintuple Angle
$\map \cos {5 \theta } = \map \sin {4 \theta} \paren { -2 \sin \theta + \cfrac 1 {2 \sin \theta + \cfrac 1 {-2\sin \theta + \cfrac 1 {2 \sin \theta } }} }$


Cosine of Sextuple Angle
$\map \cos {6 \theta } = \map \sin {5 \theta} \paren { -2 \sin \theta + \cfrac 1 {2 \sin \theta + \cfrac 1 {-2\sin \theta + \cfrac 1 {2 \sin \theta + \cfrac 1 {-2\sin \theta + \cfrac 1 {\sin \theta } } } }} }$




