# 

Source: https://proofwiki.org/wiki/Conjugate_of_Set_with_Inverse_is_Closed

Theorem
Let $G$ be a group.
Let $S \subseteq G$.
Let $\hat S = S \cup S$.
Let $\tilde S = \set {a s a^{-1}: s \in \hat S, a \in G}$.
Let $\map W {\tilde S}$ be the set of words of $\tilde S$.

Then:

$\forall w \in \map W {\tilde S}: \forall a \in G: a w a^{-1} \in \map W {\tilde S}$


Proof
Let $w \in \map W {\tilde S}$.
From the definition of $\map W {\tilde S}$, we have:

$w = \paren {a_1 s_1 a_1^{-1} } \paren {a_2 s_2 a_2^{-1} } \cdots \paren {a_n s_n a_n^{-1} }, n \in \N^*, a_i \in G, s_1 \in \hat S, 1 \le i \le n$

Thus:














\(\ds a w a^{-1}\)

\(=\)







\(\ds a \paren {a_1 s_1 a_1^{-1} } \paren {a_2 s_2 a_2^{-1} } \cdots \paren {a_n s_n a_n^{-1} } a^{-1}\)




















\(\ds \)

\(=\)







\(\ds a \paren {a_1 s_1 a_1^{-1} } a^{-1} a \paren {a_2 s_2 a_2^{-1} } a^{-1} \cdots a \paren {a_n s_n a_n^{-1} } a^{-1}\)




















\(\ds \)

\(=\)







\(\ds \paren {\paren {a a_1} s_1 \paren {a a_1}^{-1} } \paren {\paren {a a_2} s_2 \paren {a a_2}^{-1} } \cdots \paren {\paren {a a_n} s_n \paren {a a_n}^{-1} }\)










As $G$ is a group, all of the $a a_i \in G$.
The result follows.
$\blacksquare$





