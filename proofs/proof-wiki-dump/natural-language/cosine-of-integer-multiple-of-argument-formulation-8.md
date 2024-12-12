# 

Source: https://proofwiki.org/wiki/Cosine_of_Integer_Multiple_of_Argument/Formulation_8



Theorem
For $n \in \Z_{>1}$:


$\cos n \theta = \map \cos {\paren {n - 1 } \theta} \paren { a_0 - \cfrac 1 {a_1 - \cfrac 1 {a_2 - \cfrac 1 {\ddots \cfrac {} {a_{n-2} - \cfrac 1 {a_{n-1}}} }}} }$
where $a_0 = a_1 = a_2 = \ldots = a_{n-2} = 2 \cos \theta$ and

A terminal $a_{n-1} = \cos \theta$ term.


Proof
From Cosine of Integer Multiple of Argument Formulation 4 we have:














\(\ds \map \cos {n \theta}\)

\(=\)







\(\ds \paren {2 \cos \theta } \map \cos {\paren {n - 1 } \theta}  - \map \cos {\paren {n - 2 } \theta}\)




















\(\ds \)

\(=\)







\(\ds \map \cos {\paren {n - 1 } \theta} \paren {\paren {2 \cos \theta }  - \dfrac {\map \cos {\paren {n - 2 } \theta} } {\map \cos {\paren {n - 1 } \theta} } }\)





factoring out $\map \cos {\paren {n - 1 } \theta}$



Therefore $a_0 = 2 \cos \theta$

Once again, from Cosine of Integer Multiple of Argument Formulation 4 we have:














\(\ds \dfrac {\map \cos {n \theta} } {\map \cos {\paren {n - 1 } \theta} }\)

\(=\)







\(\ds 2 \cos \theta  - \dfrac {\map \cos {\paren {n - 2 } \theta} } {\map \cos {\paren {n - 1 } \theta} }\)





dividing both sides by $\map \cos {\paren {n - 1 } \theta}$














\(\ds \)

\(=\)







\(\ds 2 \cos \theta - \cfrac 1 {\cfrac {\map \cos {\paren {n - 1 } \theta} } {\map \cos {\paren {n - 2 } \theta} } }\)





Move the numerator to the denominator




In the equations above, let $n = n - k$:














\(\ds \dfrac {\map \cos {\paren {n - k } \theta} } {\map \cos {\paren {n - k - 1 } \theta} }\)

\(=\)







\(\ds 2 \cos \theta - \cfrac 1 {\cfrac {\map \cos {\paren {n - k - 1 } \theta} } {\map \cos {\paren {n - k - 2 } \theta} } }\)




















\(\ds \dfrac {\map \cos {\paren {n - k } \theta} } {\map \cos {\paren {n - \paren {k + 1} } \theta} }\)

\(=\)







\(\ds 2 \cos \theta - \cfrac 1 {\cfrac {\map \cos {\paren {n - \paren {k + 1 } } \theta} } {\map \cos {\paren {n - \paren {k + 2 } } \theta} } }\)










Therefore $a_1 = a_2 = \cdots = a_{n-2} = 2 \cos \theta$

Finally, let $k = n - 2$, then:














\(\ds \dfrac {\map \cos {2 \theta} } {\map \cos \theta }\)

\(=\)







\(\ds 2 \cos \theta - \cfrac 1 {\cfrac {\map \cos {\theta} } {\map \cos {0} } }\)




















\(\ds \)

\(=\)







\(\ds 2 \cos \theta - \dfrac 1 {\map \cos \theta }\)










Therefore $a_{n - 1} = \cos \theta$

Therefore:
For $n \in \Z_{>1}$:

$\cos n \theta = \map \cos {\paren {n - 1 } \theta} \paren { a_0 - \cfrac 1 {a_1 - \cfrac 1 {a_2 - \cfrac 1 {\ddots \cfrac {} {a_{n - 2} - \cfrac 1 {a_{n - 1} } } } } } }$
where $a_0 = a_1 = a_2 = \ldots = a_{n - 2} = 2 \cos \theta$ and

A terminal $a_{n - 1} = \cos \theta$ term.
$\blacksquare$


Examples
Cosine of Quintuple Angle
$\map \cos {5 \theta } = \map \cos {4 \theta} \paren { 2 \cos \theta - \cfrac 1 {2 \cos \theta - \cfrac 1 {2\cos \theta - \cfrac 1 {2 \cos \theta - \cfrac 1 {\cos \theta } } }} }$


Cosine of Sextuple Angle
$\cos 6 \theta = \cos 5 \theta \paren {2 \cos \theta - \cfrac 1 {2 \cos \theta - \cfrac 1 {2 \cos \theta - \cfrac 1 {2 \cos \theta - \cfrac 1 {2 \cos \theta - \cfrac 1 {\cos \theta} } } } } }$




