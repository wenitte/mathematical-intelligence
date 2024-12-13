# 

Source: https://proofwiki.org/wiki/Image_of_Interval_by_Continuous_Function_is_Interval/Proof_2

Theorem
Let $I$ be a real interval.
Let $f: I \to \R$ be a continuous real function.

Then the image of $f$ is a real interval.


Proof

This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Let $J$ be the image of $f$.
By Subset of Real Numbers is Interval iff Connected we need to show that $J$ is connected (and hence an interval).
Aiming for a contradiction, suppose not.
Then there exists a separation $S \mid T$ of $J$.
Define $A = f^{-1} \sqbrk S$ and $B = f^{-1} \sqbrk T$. $A$ and $B$ are both non-empty.
Because $f$ is continuous, by Continuous iff inverse image of any open set is open we must have $A$ and $B$ open.
Because $S \mid T$ is a separation:

$A \cap B = f^{-1} \sqbrk S \cap f^{-1} \sqbrk T = f^{-1} \sqbrk {S \cap T} = \O$, because $S \mid T$ is a separation.
Also, $A \cup B = f^{-1} \sqbrk S \cup f^{-1} \sqbrk T = f^{-1} \sqbrk {S \cup T} = f^{-1}(J) = I$ ($S \mid T$ is a separation of $J$).
Hence $A \mid B$ is a separation of $I$.
$I$ can certainly not be an interval (because it is not connected).
This is a contradiction.
Thus $J$ must be an interval.
$\blacksquare$


Sources
1977: Wendell Fleming: Functions of Several Variables (2nd ed.): $2.7$




