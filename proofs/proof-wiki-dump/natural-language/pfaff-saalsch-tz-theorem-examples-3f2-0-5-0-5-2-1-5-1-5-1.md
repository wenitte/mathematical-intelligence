# 

Source: https://proofwiki.org/wiki/Pfaff-Saalsch%C3%BCtz_Theorem/Examples/3F2(0.5,0.5,-2;1.5,-1.5;1)

Example of Use of Pfaff-Saalschütz Theorem
$\ds \map { {}_3 \operatorname F_2} { { {\dfrac 1 2, \dfrac 1 2, -2} \atop {\dfrac 3 2, -\dfrac 3 2} } \, \middle \vert \, 1} = \dfrac {64} {45}$


Proof
From Pfaff-Saalschütz Theorem:

$\ds \map { {}_3 \operatorname F_2} { { {a, b, -n} \atop {c, 1 + a + b - c - n} } \, \middle \vert \, 1} = \dfrac {\paren {c - a}^{\overline n} \paren {c - b}^{\overline n} } { c^{\overline n} \paren {c - a - b}^{\overline n} }$
where:

${}_3 \operatorname F_2$ is the generalized hypergeometric function
$x^{\overline k}$ denotes the $k$th rising factorial power of $x$.

We have:














\(\ds \map { {}_3 \operatorname F_2} { { {\dfrac 1 2, \dfrac 1 2, -2} \atop {\dfrac 3 2, -\dfrac 3 2} } \, \middle \vert \, 1}\)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \dfrac {\paren {\dfrac 1 2}^{\overline k} \paren {\dfrac 1 2}^{\overline k} \paren {-2}^{\overline k} } { \paren {\dfrac 3 2}^{\overline k} \paren {-\dfrac 3 2}^{\overline k} } \dfrac {1^k} {k!}\)





Definition of Generalized Hypergeometric Function














\(\ds \)

\(=\)







\(\ds 1 + \dfrac {\paren {\dfrac 1 2}^2 \paren {-2} } {\paren {\dfrac 3 2} \paren {-\dfrac 3 2} 1! } + \dfrac {\paren {\dfrac 1 2 \times \dfrac 3 2}^2 \paren {-2 \times -1} } {\paren {\dfrac 3 2 \times \dfrac 5 2} \paren {-\dfrac 3 2 \times -\dfrac 1 2} 2! } + \dfrac {\paren {\dfrac 1 2 \times \dfrac 3 2 \times \dfrac 5 2}^2 \paren {-2 \times -1 \times 0} } {\paren {\dfrac 3 2 \times \dfrac 5 2 \times \dfrac 7 2} \paren {-\dfrac 3 2 \times -\dfrac 1 2 \times \dfrac 1 2} 3! } + \cdots\)





$1^k = 1$ and Number to Power of Zero Rising is One














\(\ds \)

\(=\)







\(\ds 1 + \dfrac {\paren {\dfrac 1 2}^2 \paren {-2} } {\paren {\dfrac 3 2} \paren {-\dfrac 3 2} 1! } + \dfrac {\paren {\dfrac 1 2 \times \dfrac 3 2}^2 \paren {-2 \times -1} } {\paren {\dfrac 3 2 \times \dfrac 5 2} \paren {-\dfrac 3 2 \times -\dfrac 1 2} 2! }\)





series terminates after only $3$ terms














\(\ds \)

\(=\)







\(\ds 1 + \dfrac 2 9 + \dfrac 1 5\)




















\(\ds \)

\(=\)







\(\ds \dfrac {64} {45}\)









and:














\(\ds \map { {}_3 \operatorname F_2} { { {\dfrac 1 2, \dfrac 1 2, -2} \atop {\dfrac 3 2, -\dfrac 3 2} } \, \middle \vert \, 1}\)

\(=\)







\(\ds \dfrac {\paren {\dfrac 3 2 - \dfrac 1 2}^{\overline 2} \paren {\dfrac 3 2 - \dfrac 1 2}^{\overline 2} } { \paren {\dfrac 3 2}^{\overline 2} \paren {\dfrac 3 2 - \dfrac 1 2 - \dfrac 1 2}^{\overline 2} }\)





Pfaff-Saalschütz Theorem














\(\ds \)

\(=\)







\(\ds \dfrac {\paren {1 \times 2}^2 } {\paren {\dfrac 3 2 \times \dfrac 5 2} \paren {\dfrac 1 2 \times \dfrac 3 2} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac 4 {\dfrac {45} {16} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {64} {45}\)









Therefore:

$\ds \map { {}_3 \operatorname F_2} { { {\dfrac 1 2, \dfrac 1 2, -2} \atop {\dfrac 3 2, -\dfrac 3 2} } \, \middle \vert \, 1} = \dfrac {64} {45}$
$\blacksquare$





