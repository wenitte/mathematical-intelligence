# 

Source: https://proofwiki.org/wiki/Event_Space_of_Experiment_with_Final_Sample_Space_has_Even_Cardinality



Theorem
Let $\EE$ be an experiment with a probability space $\struct {\Omega, \Sigma, \Pr}$.
Let $\Omega$ be a finite set.

Then the event space $\Sigma$ consists of an even number of subsets of $\Omega$.


Proof
Let $A \in \Sigma$ be one of the events of $\EE$.
We have by definition that $\Omega$ is itself an events of $\EE$.
Hence by Set Difference of Events is Event, $\Omega \setminus A$ is also an event of $\EE$.
As $A$ is arbitrary, the same applies to all events of $\EE$.
Thus all events of $\EE$ come in pairs: $A$ and $\Omega \setminus A$.
Hence the result.
$\blacksquare$


Also see
Elementary Properties of Event Space


Sources
1986: Geoffrey Grimmett and Dominic Welsh: Probability: An Introduction ... (previous) ... (next): $1$: Events and probabilities: $1.2$: Outcomes and events: Exercise $5$




