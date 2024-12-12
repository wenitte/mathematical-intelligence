# 

Source: https://proofwiki.org/wiki/Existence_of_Generated_C*-Algebra

Theorem
Let $\struct {A, \ast, \norm {\, \cdot \,} }$ be a $\text C^\ast$-algebra.
Let $S \subseteq A$.

Then there exists a $\text C^\ast$-subalgebra $B \subseteq A$ containing $S$ which is $\subseteq$-minimal among $\text C^\ast$-subalgebras with this property.


Proof
Let $\SS$ be the set of $\text C^\ast$-subalgebras $C \subseteq A$ containing $S$.
We have $A \in \SS$ and hence $\SS \ne \O$.
Let $B = \bigcap \SS$.
From Intersection of C*-Subalgebras is C*-Subalgebra, $B$ is a $\text C^\ast$-algebra.
Further, since $S \subseteq C$ for each $C \in \SS$, we have $S \subseteq B$. 
We now just need to assure ourselves that $B \subseteq A$ is $\subseteq$-minimal in $\SS$.
Let $C \subseteq A$ be a $\text C^\ast$-subalgebra with $C \supseteq B$. 
Then $C \in \SS$.
Hence $B \subseteq C$ from Intersection is Subset.
So $B$ is $\subseteq$-minimal in $\SS$. 
$\blacksquare$





