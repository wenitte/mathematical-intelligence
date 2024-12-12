# 

Source: https://proofwiki.org/wiki/Five_Lemma

Theorem
Let $A$ be a commutative ring with unity.
Let:

$\begin{xy}\xymatrix@L+2mu@+1em{
 M_1 \ar[r]^*{\alpha_1}
     \ar[d]^*{\phi_1}
&
 M_2 \ar[r]^*{\alpha_2}
     \ar[d]^*{\phi_2}
&
 M_3 \ar[r]^*{\alpha_3}
     \ar[d]^*{\phi_3}
&
 M_4 \ar[r]^*{\alpha_4}
     \ar[d]^*{\phi_4}
&
 M_5 \ar[d]^*{\phi_5}
\\
 N_1 \ar[r]_*{\beta_1}
&
 N_2 \ar[r]_*{\beta_2}
&
 N_3 \ar[r]_*{\beta_3}
&
 N_4 \ar[r]_*{\beta_4}
&
 N_5
}\end{xy}$
be a commutative diagram of $A$-modules.
Suppose that the rows are exact.

Then:

If $\phi_2$ and $\phi_4$ are surjective and $\phi_5$ is injective then $\phi_3$ is surjective.
If $\phi_2$ and $\phi_4$ are injective and $\phi_1$ is surjective then $\phi_3$ is injective.


Proof
First suppose that $\phi_2$ and $\phi_4$ are surjective and $\phi_5$ is injective.
Let $n_3 \in N_3$ be any element.
We want to find $x \in M_3$ such that $\map {\phi_3} x = n_3$.

Let $n_4 = \map {\beta_3} {n_3} \in N_4$.
Since $\phi_4$ is surjective, there exists $m_4 \in M_4$ such that $\map {\phi_4} {m_4} = n_4$.
Since the rows are exact, we have that:

$\map {\beta_4} {n_4} = \map {\beta_4 \circ \beta_3} {n_3} = 0$
That is:

$\map {\beta_4 \circ \phi_4} {m_4} = 0$
Since the diagram is commutative, this implies that $\map {\phi_5 \circ \alpha_4} {m_4} = 0$.
Since $\phi_5$ is injective, this means that $\map {\alpha_4} {m_4} = 0$.
That is:

$m_4 \in \ker \alpha_4$
Since the rows are exact, this means that $m_4 \in \Img {\alpha_3}$, say:

$m_4 = \map {\alpha_3} {m_3}$
Thus we have:

$\map {\beta_3} {n_3} = n_4 = \map {\phi_4 \circ \alpha_3} {m_3} = \map {\beta_3 \circ \phi_3} {m_3}$
Using the fact that $\beta_3$ is a homomorphism this means that:

$n_3 - \map {\phi_3} {m_3} \in \ker \beta_3$
By exactness of the rows we therefore have $n_3 - \map {\phi_3} {m_3} = \map {\beta_2} {n_2}$ for some $n_2 \in N_2$.
By hypothesis $\phi_2$ is surjective, so there exists $m_2 \in M_2$ such that:

$n_3 - \map {\phi_3} {m_3} = \map {\beta_2 \circ \phi_2} {m_2}$
Since the diagram is commutative, we have therefore:

$n_3 - \map {\phi_3} {m_3} = \map {\phi_3 \circ \alpha_2} {m_2}$
Finally by the homomorphism property this shows that:

$n_3 = \map {\phi_3} {m_3 + \map {\alpha_2} {m_2} }$
as required.

Now suppose that $\phi_2$ and $\phi_4$ are injective and $\phi_1$ is surjective.
Let $m_3 \in M_3$ such that $\map {\phi_3} {m_3} = 0$.
We want to show that $m_3 = 0$.

First of all $\map {\phi_3} {m_3} = 0$ implies that $\map {\beta_3 \circ \phi_3} {m_3} = 0$.
Since the diagram is commutative, this implies that $\map {\phi_4 \circ \alpha_3} {m_3} = 0$.
Since $\phi_4$ is injective we have:

$\map {\alpha_3} {m_3} = 0$
Since the rows are exact, we therefore have $m_3 = \map {\alpha_2} {m_2}$ for some $m_2 \in M_2$.
Let $n_2 = \map {\phi_2} {m_2} \in N_2$.
By commutativity of the diagram, we have:

$\map {\beta_2} {n_2} = \map {\phi_3 \circ \alpha_2} {m_2} = \map {\phi_3} {m_3} = 0$
By exactness of the rows it follows that there exists $n_1 \in N_1$ such that $n_2 = \map {\beta_1} {n_1}$.
Since $\phi_1$ is assumed surjective this means that $n_1 = \map {\phi_1} {m_1}$ for some $m_1 \in M_1$.
Now:

$\map {\phi_2} {m_2} = \map {\beta_1 \circ \phi_1} {m_1} = \map {\phi_2 \circ \alpha_1} {m_1}$
Thus by the homomorphism property:

$m_2 - \map {\alpha_1} {m_1} \in \ker \phi_2$
Since $\phi_2$ is assumed injective this means that $m_2 = \map {\alpha_1} {m_1}$.
Finally, since the rows are exact we have:

$m_3 = \map {\alpha_2} {m_2} = \map {\alpha_2 \circ \alpha_1} {m_1} = 0$
as required.
$\blacksquare$





