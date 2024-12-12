# 

Source: https://proofwiki.org/wiki/Generator_of_Normal_Subgroup

Theorem
Let $G$ be a group.
Let $S \subseteq G$.
Let $\hat S = S \cup S^{-1}$, where $S^{-1}$ is the set of all the inverses of all the elements of $S$.
Let $\tilde S = \set {a s a^{-1}: s \in \hat S, a \in G}$.
Let $\map W {\tilde S}$ be the set of words of $\tilde S$.
Let $N$ be the smallest normal subgroup of $G$ that contains $S$.

Then $N = \gen S = \map W {\tilde S}$.


Proof
Let $N$ be the smallest normal subgroup of $G$ that contains $S$, where $S \subseteq G$.

$N$ must certainly include $\hat S$, because any group containing $s \in S$ must also contain $s^{-1}$. 
Therefore, $N$ must be the smallest normal subgroup containing $\hat S$.
Since $N \lhd G$, it follows that $\forall a \in G: \forall s \in \hat S: a s a^{-1} \in N$.
Thus, $\forall x \in \tilde S: x \in N$.
Thus $\tilde S \subseteq N$.

By the closure axiom, $N$ must also contain all products of any finite number of elements of $\tilde S$.
Thus $\map W {\tilde S} \subseteq N$.

Now we prove that $\map W {\tilde S} \lhd G$.
$\tilde S \ne \O$, as $e \paren {s s^{-1} } e^{-1} = e \in \tilde S$.
By Conjugate of Set with Inverse Closed for Inverses, $\tilde S$ is closed under taking inverses.
So from Set of Words Generates Group: Corollary:

$\map W {\tilde S} \le G$
From Conjugate of Set with Inverse is Closed:

$\forall w \in\map W {\tilde S}: \forall a \in G: a w a^{-1} \in \map W {\tilde S}$

From Subgroup is Normal iff Contains Conjugate Elements:

$\map W {\tilde S} \lhd G$.
The result follows by the definition of the minimality of $N$.
$\blacksquare$





