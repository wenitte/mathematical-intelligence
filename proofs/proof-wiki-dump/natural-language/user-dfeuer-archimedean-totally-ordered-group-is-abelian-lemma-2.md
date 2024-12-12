# 

Source: https://proofwiki.org/wiki/User:Dfeuer/Archimedean_Totally_Ordered_Group_is_Abelian/Lemma_2

Theorem
Let $G$ be a non-trivial totally ordered group with no smallest strictly positive element.
Let $g$ be a strictly positive element of $G$.
Let $n \in \N_{>0}$.

Then there is a strictly positive $h \in G$ such that $h^n \le g$


Proof
First we will show that this holds for $n=2$.
Let $e$ be the identity element of $G$.
Since $g>e$ and $G$ has no smallest positive element, there is an $h_1 \in G$ such that $e < h_1 < g$.
Let $h_2 = gh^{-1}$.
Then $h_2 h_1 = g$.
Since $h_1<g$, we can multiply on the right by $h_1^{-1}$ to see that

$e = h_1h_1^{-1} < gh_1^{-1} = h_2$
Since $e<h_1$, we can multiply on the left by $h_2 = gh_1^{-1}$ to see that

$h_2 < gh_1^{-1}h_1 = g$
Thus $e < h_2 < g$.
If $h_1 \le h_2$, then $h_1h_1 \le h_2h_1 = g$.
Otherwise, $h_2 \le h_1$, so $h_2 h_2 \le h_2h_1 = g$.
Let $h = \min{h_1,h_2}$. Then $e < h^2 \le g$.
Now we can prove the theorem for any $n \in \N_{>0}$:
Choose $k \in \N$ such that $2^k \ge n$.
Then applying the case for $n=2$ $k$ times, we complete the proof.
$\blacksquare$





