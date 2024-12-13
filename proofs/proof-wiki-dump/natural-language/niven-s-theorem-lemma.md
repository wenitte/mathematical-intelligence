# 

Source: https://proofwiki.org/wiki/Niven%27s_Theorem/Lemma

Theorem
For any integer $n \ge 1$, there exists a polynomial $\map {F_n} x$ such that:

$\map {F_n} {2 \cos t} = 2 \cos n t$
In addition:

$\deg F_n = n$
and $F_n$ is a monic polynomial with integer coefficients.


Proof
The proof proceeds by induction.
For $n = 1$, it is seen that:

$\map {F_1} x = x$
fulfils the propositions.
For $n = 2$:

$\map {F_2} x = x^2 - 2$
For $n > 2$:














\(\ds 2 \map \cos {n - 1} t \cos t\)

\(=\)







\(\ds \cos n t + \map \cos {n - 2} t\)














\(\ds \leadsto \ \ \)





\(\ds 2 \cos n t\)

\(=\)







\(\ds \paren {2 \map \cos {n - 1} t} \paren {2 \cos t} - 2 \map \cos {n - 2} t\)




















\(\ds \)

\(=\)







\(\ds 2 \cos t \map {F_{n - 1} } {2 \cos t} - \map {F_{n - 2} } {2 \cos t}\)









so:

$\map {F_n} x = x \map {F_{n - 1}} x - \map {F_{n - 2}} x \in \Z \sqbrk x$
will fulfil:

$\map {F_n} {2 \cos t} = 2 \cos n t$
Because $\deg F_{n - 1} = n - 1$ and $\deg F_{n - 2} = n - 2$, we can conclude that:

$\deg F_n = \deg \paren {x \map {F_{n - 1}} x - \map {F_{n - 2}} x} = n$
In addition, the leading coefficient of $F_n$ is equal to the leading coefficient of $F_{n - 1}$, which is $1$.
Hence the result.
$\blacksquare$





