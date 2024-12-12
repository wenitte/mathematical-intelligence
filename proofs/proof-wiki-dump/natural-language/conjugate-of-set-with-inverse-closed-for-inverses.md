# 

Source: https://proofwiki.org/wiki/Conjugate_of_Set_with_Inverse_Closed_for_Inverses

Theorem
Let $G$ be a group.
Let $S \subseteq G$.
Let $\hat S = S \cup S^{-1}$, where $S^{-1}$ is the set of all the inverses of all the elements of $S$.
Let $\tilde S = \set {a s a^{-1}: s \in \hat S, a \in G}$.
That is, $\tilde S$ is the set containing all the conjugates of the elements of $S$ and all their inverses.

Then:

$\forall x \in \tilde S: x^{-1} \in \tilde S$


Proof
Let $x \in \tilde S$.
That is:

$\exists s \in \hat S: x = a s a^{-1}$

Then:














\(\ds x^{-1}\)

\(=\)







\(\ds \paren {a s a^{-1} }^{-1}\)




















\(\ds \)

\(=\)







\(\ds a s^{-1} a^{-1}\)





Power of Conjugate equals Conjugate of Power




Since $s^{-1} \in \hat S$, it follows that $x^{-1} \in \tilde S$.
$\blacksquare$





