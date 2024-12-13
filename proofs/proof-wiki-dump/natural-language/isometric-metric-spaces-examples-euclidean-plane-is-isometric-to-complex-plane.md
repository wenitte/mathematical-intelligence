# 

Source: https://proofwiki.org/wiki/Isometric_Metric_Spaces/Examples/Euclidean_Plane_is_Isometric_to_Complex_Plane

Example of Isometric Metric Spaces
Let $\R^2$ be the real number plane with the Euclidean metric.
Let $\C$ denote the complex plane.
Let $f: \R^2 \to \C$ be the function defined as:

$\forall \tuple {x_1, x_2} \in \R^2: \map f {x_1, x_2} = x_1 + i x_2$
Then $f$ is an isometry from $\R^2$ to $\C$.


Proof
Let $d: \C^2 \to \R$ denote the mapping defined as:

$\forall \tuple {z_1, z_2} \in \C: \map d {z_1, z_2} = \cmod {z_1 - z_2}$
From Complex Plane is Metric Space, $\struct {\C, d}$ is a metric space such that $d$ is the same as the Euclidean metric on the real number plane.
Hence from Distance-Preserving Image Isometric to Domain for Metric Spaces, $f$ is an isometry.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $2$: Continuity generalized: metric spaces: $2.4$: Equivalent metrics: Example $2.4.10$




