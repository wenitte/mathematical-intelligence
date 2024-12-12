# 

Source: https://proofwiki.org/wiki/Closed_Interval_in_Reals_is_Uncountable

Theorem
Let $a, b$ be extended real numbers such that $a < b$.
Then the closed interval $\set {x \in \R : a \le x \le b} \subseteq \R$ is uncountable.


Proof
First suppose that $a, b \in \R$.
We have that the unit interval is uncountable.


This article needs to be linked to other articles.In particular: Unit Interval is Uncountable (page does not exist at time of editing)You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Let $f: \closedint 0 1 \to \closedint a b$ such that $\map f x = a + \paren {b - a} x$.
Then if $\map f {x_1} = \map f {x_2}$, we have:

$a + \paren {b - a} x_1 = a + \paren {b - a} x_2$
Because $b > a$:

$b - a > 0$
so this implies:

$x_1 = x_2$
Therefore $f$ is injective.
Now if $\closedint a b$ were countable, there would be an injective function $g : \closedint a b \to \N$.
By Composite of Injections is Injection, this implies that $g \circ f$ is an injection, so $\closedint 0 1$ is countable, a contradiction.

If one or both of $a, b$ is (are) not real, then we can pick a closed interval $\closedint c d \subseteq \closedint a b$ with $c, d \in \R, c < d$.
We know by the above that $\closedint c d$ is uncountable.
Let $S = \set {x \in \R : a \le x \le b}$. 
The identity function $I_\R : \closedint c d \to S$ is trivially injective.
If $S$ were uncountable, we would have an injective function $g : S \to \N$.
Then by Composite of Injections is Injection we would have an injection $\closedint c d \to \N$ given by $g \circ I_\R$.
This was shown above to be false, so $S$ is uncountable.
$\blacksquare$


Sources
1971: Wilfred Kaplan and Donald J. Lewis: Calculus and Linear Algebra ... (previous) ... (next): Introduction: Review of Algebra, Geometry, and Trigonometry: $\text{0-1}$: The Real Numbers




