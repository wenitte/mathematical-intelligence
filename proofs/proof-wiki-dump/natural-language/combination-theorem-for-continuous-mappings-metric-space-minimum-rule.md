# 

Source: https://proofwiki.org/wiki/Combination_Theorem_for_Continuous_Mappings/Metric_Space/Minimum_Rule

Theorem
Let $M = \struct {A, d}$ be a metric space.
Let $\R$ denote the real numbers.
Let $f: M \to \R$ and $g: M \to \R$ be real-valued functions from $M$ to $\R$ which are continuous on $M$.
Let $\min \set {f, g}: M \to \R$ denote the pointwise maximum of $f$ and $g$.

Then:

$\min \set {f, g}$ is ‎continuous on $M$.


Proof
Let $a \in M$ be arbitrary.
From Min Operation Representation on Real Numbers

$\min \set {x, y} = \dfrac 1 2 \paren {x + y - \size {x - y} }$
Hence:

$\min \set {\map f x, \map g x} = \dfrac 1 2 \paren {\map f x + \map g x - \size {\map f x - \map g x} }$
From Difference Rule for Continuous Mappings on Metric Space:

$\map f x - \map g x$ is continuous at $a$.
From Absolute Value Rule for Continuous Mappings on Metric Space:

$\size {\map f x - \map g x}$ is continuous at $a$.
From Sum Rule for Continuous Mappings on Metric Space:

$\map f x + \map g x$ is continuous at $a$
From Difference Rule for Continuous Mappings on Metric Space:

$\map f x + \map g x - \size {\map f x - \map g x}$ is continuous at $a$
From Multiple Rule for Continuous Mappings on Metric Space:

$\dfrac 1 2 \paren {\map f x + \map g x - \size {\map f x - \map g x} }$ is continuous at $a$.
As $a$ is arbitrary:

$\min \set {f, g}$ is ‎continuous on $M$.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $2$: Continuity generalized: metric spaces: Exercise $2.6: 14$



