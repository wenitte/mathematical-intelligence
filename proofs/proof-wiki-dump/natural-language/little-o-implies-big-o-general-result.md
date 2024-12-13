# 

Source: https://proofwiki.org/wiki/Little-O_Implies_Big-O/General_Result

Theorem
Let $X$ be a topological space.
Let $V$ be a normed vector space over $\R$ or $\C$ with norm $\norm {\,\cdot\,}$
Let $f, g: X \to V$ be mappings.
Let $x_0 \in X$.
Let $f = \map \oo g$ as $x \to x_0$, where $\oo$ denotes little-$\oo$ notation.

Then $f = \map \OO g$ as $x \to x_0$, where $\OO$ denotes big-$\OO$ notation.


Proof
From the definition of little-$\oo$ notation:

there exists a neighborhood $U$ of $x_0$ such that $\norm {\map f x} \le \norm {\map g x}$ for all $x \in U$.
By definition of big-$\OO$ notation, $f = \map \OO g$ as $x \to x_0$.
$\blacksquare$





