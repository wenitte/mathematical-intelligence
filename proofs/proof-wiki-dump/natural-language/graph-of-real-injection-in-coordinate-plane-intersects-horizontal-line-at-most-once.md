# 

Source: https://proofwiki.org/wiki/Graph_of_Real_Injection_in_Coordinate_Plane_intersects_Horizontal_Line_at_most_Once

Theorem
Let $f: \R \to \R$ be a real function which is injective.
Let its graph be embedded in the Cartesian plane $\CC$:




Let $\LL$ be a horizontal line through a point $b$ in the codomain of $f$.
Then $\LL$ intersects the graph of $f$ on at most one point $P = \tuple {a, b}$ where $b = \map f a$.


Proof
From Equation of Horizontal Line, a horizontal line in $\CC$ through the point $\tuple {0, b}$ on the $y$-axis has an equation $y = b$.

By hypothesis, $f$ is a injection.
Hence:

$\forall a_1, a_2 \in \Dom f: \map f {a_1} = \map f {a_2} \implies a_1 = a_2$
where $\Dom f$ denotes the domain of $f$.
Thus for each $b \in \Cdm f$ there exists exactly one ordered pair $\tuple {a, b}$ such that $b = \map f a$.
That is, there is exactly one point on $y = b$ which is also on the graph of $f$.
The result follows.
$\blacksquare$


Sources
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 5$. Induced mappings; composition; injections; surjections; bijections: Exercise $6 \ \text {(b)}$




