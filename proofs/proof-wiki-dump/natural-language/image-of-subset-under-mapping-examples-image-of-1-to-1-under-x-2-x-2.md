# 

Source: https://proofwiki.org/wiki/Image_of_Subset_under_Mapping/Examples/Image_of_-1_to_1_under_x%5E2-x-2

Example of Image of Subset under Mapping
Let $f: \R \to \R$ be the mapping defined as:

$\forall x \in \R: \map f x = x^2 - x - 2$
The image of the open interval $\openint {-1} 1$ is:

$f \sqbrk {\openint {-1} 1} = \hointr {-\dfrac 9 4} 0$


Proof
Trivially, by differentiating $x^2 - x - 2$ with respect to $x$:

$f' = 2 x - 1$
and equating $f'$ to $0$, the minimum of $\Img f$ is seen to occur at $\map f {\dfrac 1 2} = -\dfrac 9 4$.
As $\dfrac 1 2 \in \closedint {-1} 1$, it can be seen that the minimum of $f \sqbrk {\openint {-1} 1}$ is $-\dfrac 9 4$.
As $f$ is strictly increasing on $x > 0$ and strictly decreasing on $x < 0$, it suffices to inspect the images of the endpoints $-1$ and $1$.
Thus:

$\map f {-1} = \paren {-1}^2 - \paren {-1} - 2 = 0$
$\map f 1 = 1^2 - 1 - 2 = -2$
The result follows.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $1$: Theory of Sets: $\S 6$: Functions




