# 

Source: https://proofwiki.org/wiki/Pullback_of_Subset_Inclusion

Theorem
Denote with $\mathbf{Set}$ the category of sets.
Let $A, B$ be sets, and let $f: A \to B$ be a mapping.
Let $V \subseteq B$ be a subset of $B$.
Denote with $i: V \to B$ the inclusion mapping.
Let $f^{-1} \left({V}\right) \subseteq A$ be the preimage of $V$ under $f$.
Denote with $j: f^{-1} \left({V}\right) \to A$ the inclusion mapping.
Denote with $\bar f = f \restriction_{f^{-1} \left({V}\right)}$ the restriction of $f$ to $f^{-1} \left({V}\right)$.

Then:
$\quad\quad \begin{xy}\xymatrix{
f^{-1} \left({V}\right)
\ar[r]^*+{\bar f}
\ar[d]_*+{j}
&
V
\ar[d]^*+{i}
\\
A
\ar[r]_*+{f}
&
B
}\end{xy}$
is a pullback diagram in $\mathbf{Set}$.


Proof
From the definition of pullback, given a commutative diagram:
$\quad\quad \begin{xy}\xymatrix{
Q
\ar[r]^*+{q_1}
\ar[d]_*+{q_2}
&
V
\ar[d]^*+{i}
\\
A
\ar[r]_*+{f}
&
B
}\end{xy}$
we need to find a mapping $u: Q \to \map {f^{-1}} V$ such that $\bar f \circ u = q_1$ and $j \circ u = q_2$.

Let $x \in Q$; then $\map {q_1} x \in V \subseteq B$.
Note that the commutativity of the diagram implies that $\map {q_1} x = \map f {\map {q_2} x}$ since $i$ is an inclusion.
Hence also $\map f {\map {q_2} x} \in V$.

It follows by definition of preimage that $\map {q_2} x \in \map {f^{-1}} V$.
Thus define $u: Q \to \map {f^{-1}} V$ by restriction of $q_2$:

$\map u x := \map {q_2 \restriction_{Q \times \map {f^{-1}} V}} x$

Then we have:

$\map {\paren {j \circ u}} x = \map u x = \map {q_2} x$
since $j$ is an inclusion mapping.
Hence $q_2 = j \circ u$ by Equality of Mappings.
Furthermore:

$\map {\bar f \circ u} x = \map {\bar f \circ q_2} x = \map f {\map {q_2} x} = \map {q_1} x$
since $\bar f$ and $u$ are restrictions of $f$ and $q_2$, respectively.
Hence $\bar f \circ u = q_1$ by Equality of Mappings.

Observe that any $u': Q \to \map {f^{-1}} V$ must satisfy:

$j \circ u' = q_2 = j \circ u$
By Inclusion Mapping is Injection, $j$ is an injection.
From Injection iff Monomorphism in Category of Sets, we conclude $j$ is a monomorphism, and so $u = u'$.
This establishes that $u: Q \to \map {f^{-1}} V$ is unique.

Therefore, we have established that:
$\quad\quad \begin{xy}\xymatrix{
\map {f^{-1}} V
\ar[r]^*+{\bar f}
\ar[d]_*+{j}
&
V
\ar[d]^*+{i}
\\
A
\ar[r]_*+{f}
&
B
}\end{xy}$
is a pullback diagram in $\mathbf{Set}$.
$\blacksquare$


Sources
2010: Steve Awodey: Category Theory (2nd ed.) ... (previous) ... (next): $\S 5.2$: Example $5.7$




