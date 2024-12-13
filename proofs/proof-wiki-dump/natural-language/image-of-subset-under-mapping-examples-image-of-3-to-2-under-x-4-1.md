# 

Source: https://proofwiki.org/wiki/Image_of_Subset_under_Mapping/Examples/Image_of_-3_to_2_under_x%5E4-1

Example of Image of Element under Mapping
Let $f: \R \to \R$ be the mapping defined as:

$\forall x \in \R: \map f x = x^4 - 1$
The image of the closed interval $\closedint {-3} 2$ is:

$f \closedint {-3} 2 = \closedint {-1} {80}$


Proof
Trivially, by differentiating $x^4 - 1$ with respect to $x$:

$f' = 4 x^3$
and equating $f'$ to $0$, the minimum of $\Img f$ is seen to occur at $\map f 0 = -1$.
As $0 \in \closedint {-3} 2$, it can be seen that the minimum of $f \closedint {-3} 2$ is $-1$.
As $f$ is strictly increasing on $x > 0$ and strictly decreasing on $x < 0$, it suffices to inspect the images of the endpoints $-3$ and $2$.
Thus:

$\map f {-3} = \paren {-3}^4 - 1 = 81 - 1 = 80$
$\map f 2 = 2^4 - 1 = 16 - 1 = 15$
The result follows.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $4$: Mappings: Exercise $3 \ \text {(ii)}$




