# 

Source: https://proofwiki.org/wiki/Pullback_Functor_is_Functor

Theorem
Let $\mathbf C$ be a metacategory having all pullbacks.
Let $f: C \to D$ be a morphism of $\mathbf C$.
Let $\mathbf C \mathbin / C$ and $\mathbf C \mathbin / D$ be the slice categories over $C$ and $D$, respectively.
Let $f^* : \mathbf C \mathbin / D \to \mathbf C \mathbin / C$ be the pullback functor defined by $f$.

Then $f^*$ is a functor.


Proof
Let $\alpha: A \to D$ be an object of $\mathbf C \mathbin / D$.
Then the identity morphism $\operatorname{id}_\alpha: \alpha \to \alpha$ is by definition $\operatorname{id}_A: A \to A$.

Thus $f^* \operatorname{id}_\alpha$ is by definition the unique morphism fitting:

$\begin{xy}\xymatrix@+1em{
A'
 \ar[rr]^*{f_\alpha}
 \ar[dd]_*{f^* \alpha}
 \ar@{-->}[rd]^*{f^* \mathrm{id}_\alpha}

& &

A
 \ar[rd]^*{\mathrm{id}_\alpha}
 \ar[dd]^(.4)*{\alpha}

\\ &

A'
 \ar[ld]^*{f^* \alpha}
 \ar[rr] |{\hole} ^(.3)*{f_\alpha}

& &

A
 \ar[ld]^*{\alpha}

\\

C
 \ar[rr]_*{f}

& &

D

}\end{xy}$
It is apparent that $\operatorname{id}_{A'}$ satisfies this condition.
Since by definition, $\operatorname{id}_{f^* \alpha} = \operatorname{id}_{A'}$, this shows that:

$f^* \operatorname{id}_\alpha = \operatorname{id}_{f^* \alpha}$

Now let $\gamma_1: \alpha_2 \to \alpha_1$ and $\gamma_2: \alpha_3 \to \alpha_2$ be morphisms of $\mathbf C \mathbin / D$.
Then $f^* \left({\gamma_1 \circ \gamma_2}\right)$ is the unique morphism fitting the dashed arrow in:

$\begin{xy}\xymatrix@+1em{
A_3'
 \ar[rr]^*{f_{\alpha_3}}
 \ar[dd]_*{f^* \alpha_3}
 \ar@{-->}[rd]

& &

A_3
 \ar[rd]^*{\gamma_1 \circ \gamma_2}
 \ar[dd]^(.4)*{\alpha_3}

\\ &

A_1'
 \ar[ld]^*{f^* \alpha_1}
 \ar[rr] |{\hole} ^(.3)*{f_{\alpha_1}}

& &

A_1
 \ar[ld]^*{\alpha_1}

\\

C
 \ar[rr]_*{f}

& &

D

}\end{xy}$
Unfolding the composition $\gamma_1 \circ \gamma_2$ yields the expanded diagram:

$\begin{xy}\xymatrix@+1em{
A_3'
 \ar[rr]^*{f_{\alpha_3}}
 \ar[ddd]_*{f^* \alpha_3}
 \ar[rd]^*{f^* \gamma_2}
 \ar@{-->}@/_/[rdd]

& &

A_3
 \ar[rd]^*{\gamma_2}
 \ar[ddd]^*{\alpha_3}

\\ &

A_2'
 \ar[d]^*{f^* \gamma_1}
 \ar[rr] |{\hole} ^(.3)*{f_{\alpha_2}}

& &

A_2
 \ar[d]^*{\gamma_1}

\\ &

A_1'
 \ar[ld]^*{f^* \alpha_1}
 \ar[rr] |{\hole} ^(.3)*{f_{\alpha_1}}

& &

A_1
 \ar[ld]^*{\alpha_1}

\\

C
 \ar[rr]_*{f}

& &

D

}\end{xy}$
in which $f^* \left({\gamma_1 \circ \gamma_2}\right)$ again fits the dashed arrow.
But this means, in particular, that we must have:

$f^* \left({\gamma_1 \circ \gamma_2}\right) = f^* \gamma_1 \circ f^* \gamma_2$

Therefore, $f^*$ is a functor.
$\blacksquare$


Sources
2010: Steve Awodey: Category Theory (2nd ed.) ... (previous) ... (next): $\S 5.3$: Proposition $5.10$




