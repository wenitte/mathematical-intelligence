# 

Source: https://proofwiki.org/wiki/Dirichlet_Eta_Function_at_Non-Positive_Integers

Theorem
Let $n \ge 0$ be a integer. 
Then: 

$\map \eta {-n} = \dfrac {\paren {-1}^{n + 1} \paren {2^{n + 1 } - 1} B_{n + 1} } {n + 1}$
where:

$B_n$ is the $n$th Bernoulli number
$\eta$ is the Dirichlet eta function


Proof













\(\ds \map \eta s\)

\(=\)







\(\ds \paren {1 - 2^{1 - s} } \map \zeta s\)





Riemann Zeta Function in terms of Dirichlet Eta Function








\(\ds \leadsto \ \ \)





\(\ds \map \eta {- n}\)

\(=\)







\(\ds \paren {1 - 2^{1 - \paren {-n} } } \map \zeta {-n}\)





setting $s := - n$














\(\ds \)

\(=\)







\(\ds \paren {1 - 2^{n + 1} } \map \zeta {-n}\)




















\(\ds \)

\(=\)







\(\ds \paren {1 - 2^{n + 1} } \paren {\paren {-1}^n \dfrac {B_{n + 1} } {n + 1} }\)





Riemann Zeta Function at Non-Positive Integers














\(\ds \)

\(=\)







\(\ds \paren {-1} \times \paren {1 - 2^{n + 1 } } \times \paren {-1} \times \paren {\paren {-1}^n \dfrac {B_{n + 1} } {n + 1} }\)





multiplying by $1$: $-1 \times -1 = 1$














\(\ds \)

\(=\)







\(\ds \dfrac {\paren {-1}^{n + 1} \paren {2^{n + 1 } - 1 } B_{n + 1} } {n + 1}\)









$\blacksquare$


Also see
Riemann Zeta Function at Non-Positive Integers




