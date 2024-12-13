# 

Source: https://proofwiki.org/wiki/User:Jshflynn/Null_Language_is_Identity_of_Language_Product

Theorem
Let $\Sigma$ be an alphabet.

Let $\mathcal{P}(\Sigma^{*})$ be the $P$-star of $\Sigma$, $\circ$ denote concatenation and $\circ_L$ denote the language product operation. 

Then the null language $\{\lambda\}$ is a two-sided identity of $\mathcal{P}(\Sigma^{*})$ under $\circ_L$.


Proof
Let $V$ be a formal language over $\Sigma$ (i.e. an element of $\mathcal{P}(\Sigma^{*})$). 

We will show $\{\lambda\}\circ_L V = V$.

Let $x \in V$.

Then $\lambda \circ x \in \{\lambda\}\circ_L V$

Then from Empty Word is Two-sided Identity:


$x \in \{\lambda\}\circ_L V$

Hence $V \subseteq \{\lambda\}\circ_L V$

Now let $x \in \{\lambda\}\circ_L V$ 

By the definition of language product, there exists some $y$ in $V$ such that:


$x= \lambda \circ y$ and $\lambda \circ y \in \{\lambda\}\circ_L V$

From Empty Word is Two-sided Identity, $\lambda \circ y = y$ and
$y = x$ 

Hence $x \in \{\lambda\}\circ_L V \implies x \in V$ and so $\{\lambda\}\circ_L V \subseteq V$

By the definition of set equality then:


$\{\lambda\}\circ_L V = V$.

So $\{\lambda\}$ is a left identity.

The proof that $\{\lambda\}$ is a right identity follows similarly. 

$\blacksquare$





