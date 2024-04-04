package server.components.componentsRepository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import server.components.RecentActivities;

@Repository
public interface RecentActivitiesRepository extends JpaRepository<RecentActivities, Integer> {

}
